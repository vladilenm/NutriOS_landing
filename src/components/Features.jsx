import UserCircle2 from 'lucide-react/dist/esm/icons/user-circle-2'
import Wand2 from 'lucide-react/dist/esm/icons/wand-2'
import Brain from 'lucide-react/dist/esm/icons/brain'
import ListChecks from 'lucide-react/dist/esm/icons/list-checks'
import BookOpen from 'lucide-react/dist/esm/icons/book-open'
import HeartHandshake from 'lucide-react/dist/esm/icons/heart-handshake'
import Reveal from './Reveal'

const features = [
  {
    icon: Wand2,
    title: 'AI-планирование блюд',
    text: 'Генерируйте простые идеи блюд под ваши реальные ограничения, а не обобщённые советы из интернета.',
    variant: 'wide dark',
  },
  {
    icon: UserCircle2,
    title: 'Личный профиль питания',
    text: 'Храните цели, предпочтения, ограничения, бюджет и стиль готовки в одном месте.',
  },
  {
    icon: Brain,
    title: 'Память предпочтений',
    text: 'NutriOS помнит, что вам нравится, чего вы избегаете и что реально работает в вашей неделе.',
  },
  {
    icon: ListChecks,
    title: 'Списки покупок',
    text: 'Превращайте планы питания в организованные списки продуктов, чтобы планы было проще выполнять.',
  },
  {
    icon: BookOpen,
    title: 'Знание рецептов',
    text: 'Исследуйте идеи блюд, замены и простые рецепты, не начиная с чистого листа.',
  },
  {
    icon: HeartHandshake,
    title: 'Мягкие рекомендации',
    text: 'Деликатные подсказки поддерживают постоянство без давления, стыда и жёстких диетических правил.',
    variant: 'full soft',
  },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="features__head">
          <Reveal as="h2" className="h-section">
            Всё, что нужно, чтобы управлять питанием стало проще.
          </Reveal>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <Reveal
              className={`feature ${f.variant ? f.variant.split(' ').map((v) => `feature--${v}`).join(' ') : ''}`}
              key={f.title}
              delay={i * 60}
            >
              <div className="feature__icon">
                <f.icon size={22} strokeWidth={1.9} aria-hidden="true" />
              </div>
              <div className="feature__body">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
