import { useEffect, useRef } from 'react'

/**
 * Анимированный фон из мягких световых лучей на canvas.
 * Адаптирован под стек проекта: чистый JS + canvas, без внешних зависимостей.
 * Привязывается к размеру родительского блока (не окна) и уважает
 * prefers-reduced-motion. Палитра — оливково-мятная, под дизайн NutriOS.
 */

const MINIMUM_BEAMS = 20

const OPACITY_MAP = {
  subtle: 0.55,
  medium: 0.7,
  strong: 0.85,
}

function createBeam(width, height) {
  const angle = -35 + Math.random() * 10
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 40 + Math.random() * 70,
    length: height * 2.5,
    angle,
    speed: 0.4 + Math.random() * 0.8,
    opacity: 0.1 + Math.random() * 0.14,
    // Оливково-мятный диапазон вместо голубого оригинала
    hue: 110 + Math.random() * 50,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  }
}

export default function BeamsBackground({ className = '', intensity = 'medium' }) {
  const canvasRef = useRef(null)
  const beamsRef = useRef([])
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const wrap = canvas.parentElement
    if (!wrap) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Логические (CSS) размеры блока
    let W = 0
    let H = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = wrap.getBoundingClientRect()
      W = Math.max(1, rect.width)
      H = Math.max(1, rect.height)
      canvas.width = W * dpr
      canvas.height = H * dpr
      canvas.style.width = `${W}px`
      canvas.style.height = `${H}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const total = Math.floor(MINIMUM_BEAMS * 1.5)
      beamsRef.current = Array.from({ length: total }, () => createBeam(W, H))
    }

    const resetBeam = (beam, index, total) => {
      const column = index % 3
      const spacing = W / 3
      beam.y = H + 100
      beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5
      beam.width = 80 + Math.random() * 100
      beam.speed = 0.4 + Math.random() * 0.4
      beam.hue = 110 + (index * 50) / total
      beam.opacity = 0.16 + Math.random() * 0.1
      return beam
    }

    const drawBeam = (beam) => {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)

      const pulsing = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * OPACITY_MAP[intensity]
      const grad = ctx.createLinearGradient(0, 0, 0, beam.length)
      grad.addColorStop(0, `hsla(${beam.hue}, 60%, 55%, 0)`)
      grad.addColorStop(0.1, `hsla(${beam.hue}, 60%, 55%, ${pulsing * 0.5})`)
      grad.addColorStop(0.4, `hsla(${beam.hue}, 60%, 55%, ${pulsing})`)
      grad.addColorStop(0.6, `hsla(${beam.hue}, 60%, 55%, ${pulsing})`)
      grad.addColorStop(0.9, `hsla(${beam.hue}, 60%, 55%, ${pulsing * 0.5})`)
      grad.addColorStop(1, `hsla(${beam.hue}, 60%, 55%, 0)`)

      ctx.fillStyle = grad
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    const render = () => {
      ctx.clearRect(0, 0, W, H)
      ctx.filter = 'blur(35px)'
      beamsRef.current.forEach((beam) => drawBeam(beam))
    }

    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      ctx.filter = 'blur(35px)'
      const total = beamsRef.current.length
      beamsRef.current.forEach((beam, i) => {
        beam.y -= beam.speed
        beam.pulse += beam.pulseSpeed
        if (beam.y + beam.length < -100) resetBeam(beam, i, total)
        drawBeam(beam)
      })
      rafRef.current = requestAnimationFrame(animate)
    }

    resize()

    const ro = new ResizeObserver(() => {
      resize()
      if (reduceMotion) render()
    })
    ro.observe(wrap)

    if (reduceMotion) {
      // Статичный кадр — цикл не нужен.
      render()
      return () => ro.disconnect()
    }

    // Гоняем rAF только когда секция видна и вкладка активна: вне экрана
    // canvas впустую жёг бы CPU/GPU и батарею на blur-фильтре каждый кадр.
    let onScreen = false

    const start = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(animate)
    }

    const stop = () => {
      if (!rafRef.current) return
      cancelAnimationFrame(rafRef.current)
      rafRef.current = 0
    }

    const sync = () => {
      if (onScreen && !document.hidden) start()
      else stop()
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting
        sync()
      },
      { threshold: 0 },
    )
    io.observe(wrap)

    document.addEventListener('visibilitychange', sync)

    return () => {
      io.disconnect()
      ro.disconnect()
      document.removeEventListener('visibilitychange', sync)
      stop()
    }
  }, [intensity])

  return (
    <div className={`beams ${className}`.trim()} aria-hidden="true">
      <canvas ref={canvasRef} className="beams__canvas" />
      <div className="beams__overlay" />
    </div>
  )
}
