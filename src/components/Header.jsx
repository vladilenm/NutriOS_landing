import { useEffect, useState } from 'react'
import Menu from 'lucide-react/dist/esm/icons/menu'
import X from 'lucide-react/dist/esm/icons/x'

const links = [
  { href: '#how', label: 'Как это работает' },
  { href: '#features', label: 'Возможности' },
  { href: '#personalization', label: 'Персонализация' },
  { href: '#safety', label: 'Безопасность' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Закрываем меню по Escape для клавиатурной доступности.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="logo">
          <span className="logo__mark">
            <span className="logo__blink" />
          </span>
          NutriOS
        </a>

        <nav className="nav">
          <div id="nav-menu" className={`nav__links ${menuOpen ? 'open' : ''}`}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
          <a href="#waitlist" className="btn btn--primary btn--sm">
            В лист ожидания
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
