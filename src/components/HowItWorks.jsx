import Reveal from './Reveal'
import BeamsBackground from './BeamsBackground'

const steps = [
  {
    title: 'Расскажите свой контекст',
    text: 'Поделитесь целями, предпочтениями, аллергиями, нелюбимыми продуктами, бюджетом, графиком и временем на готовку.',
  },
  {
    title: 'Получите простой план',
    text: 'NutriOS предлагает блюда под вашу реальную жизнь, а не под идеальную версию недели.',
  },
  {
    title: 'Превратите блюда в покупки',
    text: 'Сформируйте понятный список покупок по плану, сгруппированный по ингредиентам и категориям.',
  },
  {
    title: 'Улучшайте через обратную связь',
    text: 'Отмечайте, что сработало, что показалось тяжёлым, что было слишком дорого и что хочется повторить.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section how" id="how">
      <BeamsBackground intensity="medium" />
      <div className="container">
        <div className="how__head">
          <Reveal as="h2" className="h-section">
            От одного короткого брифа — к живой системе питания.
          </Reveal>
          <Reveal as="p" className="lead" delay={80}>
            NutriOS превращает ваши цели, ограничения и обратную связь в практичные идеи
            блюд, списки покупок и мягкие рекомендации для привычек.
          </Reveal>
        </div>

        <div className="steps">
          {steps.map((s, i) => (
            <Reveal className="step" key={s.title} delay={i * 90}>
              <span className="step__n">Шаг {i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="how__note" delay={120}>
          Чем больше обратной связи вы даёте, тем сильнее система питания начинает
          ощущаться так, будто её построили вокруг вас.
        </Reveal>
      </div>
    </section>
  )
}
