import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw'
import Reveal from './Reveal'

const plan = [
  { day: 'День 1', meals: 'Йогуртовая тарелка · Курица с рисом · Чечевичный суп' },
  { day: 'День 2', meals: 'Яйца на тосте · Ролл с индейкой · Паста с овощами' },
  { day: 'День 3', meals: 'Смузи · Салат с нутом · Курица на сковороде' },
]

const shopping = [
  'Греческий йогурт',
  'Яйца',
  'Куриная грудка',
  'Рис',
  'Чечевица',
  'Овощи',
  'Нут',
  'Цельнозерновой хлеб',
]

export default function CommandCenter() {
  return (
    <section className="section" id="command">
      <div className="container">
        <div className="command__head">
          <Reveal as="h2" className="h-section">
            Одно место для блюд, предпочтений, покупок и обратной связи.
          </Reveal>
          <Reveal as="p" className="lead" delay={80}>
            NutriOS спроектирован как спокойный дашборд для ежедневных решений о еде. Вместо
            прыжков между заметками, приложениями с рецептами, списками покупок и случайными
            AI-чатами вы получаете одно личное пространство для питания.
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="dashboard">
            <div className="dashboard__bar">
              <span className="dashboard__dots">
                <i />
                <i />
                <i />
              </span>
              <span className="dashboard__title">NutriOS — рабочее пространство</span>
            </div>

            <div className="dashboard__grid">
              {/* Зона 1 — запрос */}
              <div className="zone zone--full zone--ask">
                <div className="mono-label">Спросите NutriOS</div>
                <div className="ask-q">
                  «Что приготовить на этой неделе, если хочу больше энергии, меньше доставки
                  и никаких сложных рецептов?»
                </div>
                <div className="ask-hint">
                  <i />
                  NutriOS собирает план под ваши ограничения…
                </div>
              </div>

              {/* Зона 2 — план питания */}
              <div className="zone">
                <div className="mono-label">План на 3 дня</div>
                <div className="mealplan">
                  {plan.map((d) => (
                    <div className="mealplan__day" key={d.day}>
                      <div className="mealplan__label">{d.day}</div>
                      <div className="mealplan__meals">{d.meals}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Зона 3 — список покупок */}
              <div className="zone">
                <div className="mono-label">Умный список покупок</div>
                <div className="shop-list">
                  {shopping.map((item) => (
                    <span className="shop-item" key={item}>
                      <i />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Зона 4 — память обратной связи */}
              <div className="zone zone--full zone--feedback">
                <span className="zone--feedback__mark" aria-hidden="true">
                  <RefreshCw size={18} strokeWidth={2} />
                </span>
                <div>
                  <div className="mono-label">Обновлено из обратной связи</div>
                  <p>
                    Вы предпочитаете повторяемые блюда, меньше ингредиентов и ужины, которые
                    можно приготовить на одной сковороде.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
