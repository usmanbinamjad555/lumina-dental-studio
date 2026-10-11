import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { clinic, dentists, services } from '../data/site'
import { Button, PageHeader, useSeo } from '../components/ui'
import { useAppointments } from '../lib/appointments'

const field = 'mt-1.5 w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-ink/50 focus:border-teal'

export default function Book() {
  useSeo('Book an Appointment', 'Request an appointment at Lumina Dental Studio in Austin, TX. Demo form: requests are stored in your browser only.')
  const [params] = useSearchParams()
  const { add } = useAppointments()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [done, setDone] = useState<{ id: string; name: string } | null>(null)
  const preset = services.find((s) => s.slug === params.get('service'))?.title ?? ''
  const today = new Date().toISOString().slice(0, 10)

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const err: Record<string, string> = {}
    for (const k of ['service', 'dentist', 'date', 'time', 'name', 'email', 'phone']) if (!f[k]?.trim()) err[k] = 'This field is required.'
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) err.email = 'Enter a valid email address.'
    if (f.phone && f.phone.replace(/\D/g, '').length < 10) err.phone = 'Enter a 10-digit phone number.'
    if (f.date && f.date < today) err.date = 'Choose a future date.'
    setErrors(err)
    if (Object.keys(err).length) { (e.currentTarget.querySelector('[aria-invalid="true"]') as HTMLElement | null)?.focus(); return }
    const id = add({ name: f.name, email: f.email, phone: f.phone, service: f.service, dentist: f.dentist, date: f.date, time: f.time })
    setDone({ id, name: f.name })
  }
  const Err = ({ k }: { k: string }) => errors[k] ? <p id={`${k}-err`} className="mt-1 text-sm text-red-700">{errors[k]}</p> : null
  const a = (k: string) => ({ id: k, name: k, 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined, className: field })

  return (
    <>
      <PageHeader eyebrow="Book an appointment" title="Request your visit." intro="Tell us what you need and your preferred time." />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:py-20">
        <div className="md:col-span-2">
          <p role="note" className="mb-6 rounded-xl bg-teal-50 p-4 text-sm"><strong className="text-navy">Frontend demo.</strong> Requests are saved in this browser only and are not sent to a real clinic.</p>
          {done ? (
            <div role="status" className="rounded-2xl border border-teal bg-teal-50 p-8">
              <h2 className="text-3xl">Request received, {done.name.split(' ')[0]}.</h2>
              <p className="mt-3">Your demo reference is <strong className="text-navy">{done.id}</strong>. In a live clinic, our team would confirm by phone or email.</p>
              <div className="mt-6 flex flex-wrap gap-3"><Button to="/admin">View in admin preview</Button><Button to="/" variant="outline">Back to home</Button></div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="service" className="text-sm font-semibold text-navy">Service *</label>
                <select {...a('service')} defaultValue={preset}><option value="">Select a service</option>{services.map((s) => <option key={s.slug}>{s.title}</option>)}</select><Err k="service" /></div>
              <div><label htmlFor="dentist" className="text-sm font-semibold text-navy">Dentist *</label>
                <select {...a('dentist')} defaultValue=""><option value="">Select a dentist</option><option>No preference</option>{dentists.map((d) => <option key={d.id}>{d.name.split(',')[0]}</option>)}</select><Err k="dentist" /></div>
              <div><label htmlFor="date" className="text-sm font-semibold text-navy">Preferred date *</label><input type="date" min={today} {...a('date')} /><Err k="date" /></div>
              <div><label htmlFor="time" className="text-sm font-semibold text-navy">Preferred time *</label>
                <select {...a('time')} defaultValue=""><option value="">Select a time</option>{['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map((t) => <option key={t}>{t}</option>)}</select><Err k="time" /></div>
              <div><label htmlFor="name" className="text-sm font-semibold text-navy">Full name *</label><input autoComplete="name" {...a('name')} /><Err k="name" /></div>
              <div><label htmlFor="phone" className="text-sm font-semibold text-navy">Phone *</label><input type="tel" autoComplete="tel" placeholder="(512) 555-0100" {...a('phone')} /><Err k="phone" /></div>
              <div className="sm:col-span-2"><label htmlFor="email" className="text-sm font-semibold text-navy">Email *</label><input type="email" autoComplete="email" {...a('email')} /><Err k="email" /></div>
              <button type="submit" className="rounded-full bg-navy px-6 py-3.5 font-semibold text-white hover:bg-navy-700 sm:col-span-2 sm:w-fit">Request appointment</button>
            </form>
          )}
        </div>
        <aside className="rounded-2xl bg-teal-50 p-6 text-sm">
          <h2 className="text-xl">Prefer to talk?</h2>
          <p className="mt-3">Call <a className="font-semibold text-navy" href={clinic.phoneHref}>{clinic.phone}</a> or message us on <a className="font-semibold text-navy" href={clinic.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>.</p>
          <ul className="mt-4 space-y-2">{clinic.hours.map((h) => <li key={h.day}><strong className="text-navy">{h.day}</strong><br />{h.time}</li>)}</ul>
        </aside>
      </div>
    </>
  )
}
