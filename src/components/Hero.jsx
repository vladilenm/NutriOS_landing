import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right'
import Reveal from './Reveal'

const profile = [
  ['Цель', 'Стабильная энергия'],
  ['Время готовки', '20 мин'],
  ['Бюджет', '€80 / неделя'],
  ['Избегает', 'Рыбу'],
  ['Стиль', 'Простые блюда'],
]

const focus = [
  'Меньше усталости от решений',
  'Повторять ингредиенты',
  'Лёгкие и простые в готовке блюда',
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        {/* Левая колонка — текст */}
        <div>
          <Reveal>
            <span className="hero__eyebrow">
              <span />
              Персональная ОС питания!
            </span>
          </Reveal>

          <Reveal as="h1" className="h-display hero__title" delay={80}>
            Превратите хаос питания в&nbsp;систему, которая помнит&nbsp;вас.
          </Reveal>

          <Reveal as="p" className="lead hero__sub" delay={160}>
            NutriOS помогает занятым разработчикам и специалистам умственного труда
            планировать блюда, помнить предпочтения, формировать полезные привычки и принимать
            ежедневные решения о еде — без таблиц, давления и диетического шума.
          </Reveal>

          <Reveal className="hero__cta" delay={240}>
            <a href="#waitlist" className="btn btn--primary">
              Записаться в лист ожидания
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#command" className="btn btn--ghost">
              Посмотреть превью
            </a>
          </Reveal>

          <Reveal className="hero__proof" delay={320}>
            <div className="hero__avatars" aria-hidden="true">
              <span>А</span>
              <span>М</span>
              <span>D</span>
              <span>К</span>
            </div>
            <p>
              <strong>1 200+</strong> разработчиков уже в листе ожидания
            </p>
          </Reveal>
        </div>

        {/* Правая колонка — mockup */}
        <Reveal className="hero__mockup" delay={260}>
          {/* Карточка 1 — AI-диалог */}
          <div className="mock-card">
            <div className="mock-card__head">
              <span className="mock-card__mark">N</span>
              <span className="mock-card__title">AI-ассистент</span>
              <span className="mock-card__status">online</span>
            </div>
            <div className="chat">
              <div className="chat-bubble chat-bubble--you">
                Хочу простой план питания на 3 дня. Много энергии, без рыбы, максимум
                20 минут готовки, около €80 в неделю.
              </div>
              <div className="chat-bubble chat-bubble--ai">
                <b>N:</b> Понял. Соберу план вокруг быстрых завтраков, богатых белком обедов
                и простых ужинов — из ингредиентов, которые можно переиспользовать.
              </div>
            </div>
          </div>

          {/* Ряд из двух карточек */}
          <div className="mock-row">
            <div className="mini-card">
              <div className="mono-label">Ваш профиль питания</div>
              <div className="profile-list">
                {profile.map(([k, v]) => (
                  <div
                    className={`profile-row ${v === 'Рыбу' ? 'profile-row--avoid' : ''}`}
                    key={k}
                  >
                    <span>{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="focus-card">
              <div className="mono-label">Фокус недели</div>
              <div className="focus-list">
                {focus.map((f) => (
                  <div className="focus-item" key={f}>
                    <ChevronRight size={14} strokeWidth={2.4} aria-hidden="true" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
