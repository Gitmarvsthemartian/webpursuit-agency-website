'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  'Website Design',
  'WordPress Development',
  'E-Commerce Development',
  'Website Maintenance',
  'SEO Optimization',
  'Speed Optimization',
  'Not sure yet',
]

const fieldClass =
  'w-full rounded-xl border border-input bg-[color:var(--navy-deep)] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()

  setLoading(true)

  try {
    const form = e.currentTarget
    const formData = new FormData(form)

  const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    access_key: '0a0f8014-b276-4cb2-944e-d1b0abf641cb',

    subject: 'New Website Inquiry',

    from_name: formData.get('name'),

    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  }),
})

const result = await response.json()

if (result.success) {
  setSubmitted(true)
  form.reset()
} else {
  console.error(result)
  alert('Unable to send your message. Please try again.')
}

  
} catch (error) {
    console.error(error)
    alert('Something went wrong. Please try again.')
  } finally {
    setLoading(false)
  }
}

if (submitted) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-primary/30 glass p-10 text-center">
      <CheckCircle2 className="size-14 text-primary" />

      <h3 className="mt-5 font-heading text-2xl font-bold">
        Thanks for reaching out!
      </h3>

      <p className="mt-2 max-w-sm text-muted-foreground">
        We have received your request and a member of our team will get back to
        you within one business day.
      </p>
    </div>
  )
}

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border glass p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@business.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(800) 555-1234"
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Service Needed
          </label>
          <select
  id="service"
  name="service"
  className={fieldClass}
  required
  defaultValue=""
>
  <option value="" disabled>
    Select a service
  </option>
  {services.map((s) => (
    <option key={s} value={s}>
      {s}
    </option>
  ))}
</select>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your business and what you're looking to achieve..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <Button
  type="submit"
  size="lg"
  disabled={loading}
  className="mt-6 h-12 w-full rounded-xl text-base font-semibold"
>
  {loading ? 'Sending...' : 'Send Message'}
  {!loading && <Send className="size-4" />}
</Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We typically respond within one business day.
      </p>
    </form>
  )
}
