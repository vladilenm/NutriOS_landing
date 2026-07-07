const links = [
  { href: '#how', label: 'Как это работает' },
  { href: '#features', label: 'Возможности' },
  { href: '#personalization', label: 'Персонализация' },
  { href: '#safety', label: 'Безопасность' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="logo">
              <span className="logo__mark">
                <span className="logo__blink" />
              </span>
              NutriOS
            </a>
            <p>
              Персональная ОС питания для занятых разработчиков и специалистов умственного
              труда, которые хотят планировать блюда, помнить предпочтения и строить более
              здоровые ритуалы без давления.
            </p>
          </div>

          <nav className="footer__links">
            <h4>Навигация</h4>
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="footer__note">
          NutriOS — ассистент для благополучия и обучения. Он не заменяет профессиональную
          медицинскую консультацию.
        </p>
        <p className="footer__copy">© 2026 NutriOS. Демо-лендинг.</p>
      </div>
    </footer>
  )
}
