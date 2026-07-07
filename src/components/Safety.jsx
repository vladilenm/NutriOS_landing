import AlertTriangle from 'lucide-react/dist/esm/icons/alert-triangle'
import Check from 'lucide-react/dist/esm/icons/check'
import Minus from 'lucide-react/dist/esm/icons/minus'
import Reveal from './Reveal'
import WaitlistForm from './WaitlistForm'

const boundaries = [
  { label: 'Без диагнозов', ok: false },
  { label: 'Без планов лечения', ok: false },
  { label: 'Без гарантированных результатов', ok: false },
  { label: 'Не заменяет врачей, диетологов и нутрициологов', ok: false },
  { label: 'Создан для ежедневного планирования и обучения', ok: true },
]

export default function Safety() {
  return (
    <section className="section" id="safety">
      <div className="container">
        {/* Блок безопасности */}
        <Reveal className="safety safety__grid">
          <div>
            <span className="kicker">Безопасность</span>
            <h2>Поддержка благополучия, а не медицинский совет.</h2>
            <div className="safety__text">
              <p>
                NutriOS — это ассистент для благополучия и обучения. Он помогает с ежедневным
                планированием, организацией питания и поддержкой привычек, но не заменяет
                профессиональную медицинскую консультацию.
              </p>
              <p>
                При медицинских состояниях, расстройствах пищевого поведения, аллергиях,
                беременности, вопросах, связанных с лекарствами, или любых рискованных
                ситуациях со здоровьем следует обращаться к квалифицированным специалистам.
              </p>
            </div>
          </div>

          <div className="boundaries">
            <div className="boundaries__head">
              <span className="boundaries__badge">
                <AlertTriangle size={14} strokeWidth={2.4} aria-hidden="true" />
              </span>
              <span className="boundaries__title">Границы системы</span>
            </div>
            <ul className="boundaries__list">
              {boundaries.map((b) => (
                <li key={b.label} className={b.ok ? 'ok' : ''}>
                  <span className="boundaries__mark" aria-hidden="true">
                    {b.ok ? <Check size={16} strokeWidth={2.4} /> : <Minus size={16} strokeWidth={2.4} />}
                  </span>
                  {b.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Финальный CTA */}
        <Reveal className="final-cta" id="waitlist">
          <div className="final-cta__inner">
            <div className="final-cta__body">
              <h2>Стройте более спокойные отношения с едой — по одной системе за раз.</h2>
              <p>
                Записывайтесь в лист ожидания и следите за превью NutriOS — персональной ОС
                питания для тех, кто хочет лучшие привычки, не превращая жизнь в таблицу.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
