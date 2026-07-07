import { useEffect, useRef, useState } from 'react'

/**
 * Мягкое появление блока при попадании в область просмотра.
 * delay — задержка в мс для эффекта каскада.
 *
 * Все экземпляры Reveal делят один общий IntersectionObserver вместо
 * создания собственного на каждый блок — меньше наблюдателей на странице.
 */

// Единый наблюдатель и реестр коллбэков для всех reveal-блоков.
let sharedObserver = null
const callbacks = new WeakMap()

function getObserver() {
  if (sharedObserver) return sharedObserver
  // SSR-safety: IntersectionObserver есть только в браузере.
  if (typeof IntersectionObserver === 'undefined') return null

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const cb = callbacks.get(entry.target)
        if (cb) {
          cb()
          callbacks.delete(entry.target)
          sharedObserver.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )
  return sharedObserver
}

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = getObserver()
    if (!observer) {
      // Нет IntersectionObserver — показываем сразу.
      setVisible(true)
      return
    }

    callbacks.set(el, () => setVisible(true))
    observer.observe(el)

    return () => {
      callbacks.delete(el)
      observer.unobserve(el)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'in' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
