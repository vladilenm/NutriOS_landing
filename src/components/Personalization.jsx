import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right'
import Reveal from './Reveal'

const cards = [
  {
    title: 'Цели',
    text: 'Стабильная энергия, более лёгкие блюда, поддержка мышц, лучшие ритуалы или меньше случайной доставки.',
  },
  {
    title: 'Ограничения',
    text: 'Аллергии, нелюбимые продукты, ингредиенты для исключения, доступная техника и лимиты по времени.',
  },
  {
    title: 'Бюджет',
    text: 'Планируйте блюда вокруг суммы, которую вы реально готовы тратить каждую неделю.',
  },
  {
    title: 'Стиль готовки',
    text: 'Быстрые блюда, батч-кукинг, ужины на одной сковороде, простые завтраки или обеды без готовки.',
  },
  {
    title: 'Обратная связь',
    text: 'Расскажите NutriOS, что сработало, что провалилось, что показалось слишком тяжёлым и что хочется повторить.',
  },
]

const cycle = ['План', 'Еда', 'Реакция', 'Улучшение']

export default function Personalization() {
  return (
    <section className="section person" id="personalization">
      <div className="container">
        <div className="person__grid">
          <div>
            <Reveal as="h2" className="h-section">
              Не шаблон диеты. Система, которая подстраивается под вашу реальную жизнь.
            </Reveal>
            <Reveal as="p" className="person__text" delay={80}>
              Ваша система питания должна знать больше, чем цель по калориям. Она должна
              понимать, как вы на самом деле живёте: ритм работы, спады энергии, терпение к
              готовке, любимые ингредиенты, бюджет и блюда, к которым вы возвращаетесь снова
              и снова.
            </Reveal>
          </div>

          <Reveal className="cycle" delay={160}>
            <div className="mono-label">Главный цикл</div>
            <div className="cycle__flow">
              {cycle.map((step, i) => (
                <span key={step} style={{ display: 'contents' }}>
                  <div className={`cycle__step ${i === cycle.length - 1 ? 'cycle__step--last' : ''}`}>
                    <div className="cycle__badge">{i + 1}</div>
                    <div className="cycle__name">{step}</div>
                  </div>
                  {i < cycle.length - 1 && (
                    <span className="cycle__arrow" aria-hidden="true">
                      <ChevronRight size={18} strokeWidth={2.2} />
                    </span>
                  )}
                </span>
              ))}
            </div>
            <p className="cycle__note">
              Это и есть главный цикл. NutriOS становится лучше, когда ваш реальный опыт
              становится частью системы.
            </p>
          </Reveal>
        </div>

        <div className="person__cards">
          {cards.map((c, i) => (
            <Reveal className="pcard" key={c.title} delay={i * 70}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
