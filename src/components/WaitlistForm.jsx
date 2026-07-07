import { useState } from 'react'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import Check from 'lucide-react/dist/esm/icons/check'
import Loader2 from 'lucide-react/dist/esm/icons/loader-2'

/**
 * Форма записи в лист ожидания.
 * Демо-лендинг без бэкенда — сабмит имитируется, но состояния
 * (idle → loading → success / error) реализованы полноценно.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (status === 'loading') return

    const value = email.trim()
    if (!EMAIL_RE.test(value)) {
      setError('Введите корректный email — например, name@example.com')
      setStatus('error')
      return
    }

    setError('')
    setStatus('loading')

    // Демо: имитируем запрос к серверу.
    setTimeout(() => {
      setStatus('success')
    }, 900)
  }

  if (status === 'success') {
    return (
      <div className="waitlist waitlist--done" role="status" aria-live="polite">
        <span className="waitlist__check">
          <Check size={20} strokeWidth={2.4} />
        </span>
        <div>
          <strong>Готово — вы в списке.</strong>
          <p>Пришлём приглашение на превью NutriOS на {email}.</p>
        </div>
      </div>
    )
  }

  return (
    <form className="waitlist" onSubmit={onSubmit} noValidate>
      <div className="waitlist__field">
        <label htmlFor="waitlist-email" className="waitlist__label">
          Email для приглашения
        </label>
        <div className="waitlist__row">
          <input
            id="waitlist-email"
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            placeholder="name@example.com"
            className={`waitlist__input ${status === 'error' ? 'is-error' : ''}`}
            value={email}
            aria-invalid={status === 'error'}
            aria-describedby={status === 'error' ? 'waitlist-error' : undefined}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === 'error') setStatus('idle')
            }}
          />
          <button type="submit" className="btn btn--primary" disabled={status === 'loading'}>
            {status === 'loading' ? (
              <>
                <Loader2 size={18} className="spin" />
                Записываем…
              </>
            ) : (
              <>
                Записаться
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>
      </div>

      {status === 'error' && (
        <p id="waitlist-error" className="waitlist__error" role="alert">
          {error}
        </p>
      )}
      <p className="waitlist__hint">Без спама. Только запуск превью и ранний доступ.</p>
    </form>
  )
}
