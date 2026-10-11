import { Link } from 'react-router-dom'
import { clinic, dentists, faqs, testimonials, beforeAfter } from '../data/site'
import { Accordion, BeforeAfter, BookingCta, Button, PageHeader, Reveal, Section, useSeo } from '../components/ui'

export function DentistCard({ d }: { d: (typeof dentists)[number] }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
      <img src={d.image} alt={`Portrait of ${d.name}`} loading="lazy" width={600} height={600} className="aspect-square w-full object-cover object-top" />
      <div className="p-6">
        <h3 className="text-xl">{d.name}</h3>
        <p className="mt-1 text-sm font-semibold text-[#2a9d95]">{d.role}</p>
        <p className="mt-3 text-sm leading-relaxed">{d.bio}</p>
        <ul className="mt-4 flex flex-wrap gap-2">{d.focus.map((f) => <li key={f} className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-navy">{f}</li>)}</ul>
      </div>
    </article>
  )
}

export function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6">
      <div className="text-teal" aria-label="5 out of 5 stars">★★★★★</div>
      <blockquote className="mt-3 flex-1 leading-relaxed">“{t.text}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <img src={t.image} alt="" loading="lazy" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
        <span className="text-sm"><strong className="block text-navy">{t.name}</strong>{t.service} · {t.area}</span>
      </figcaption>
    </figure>
  )
}

export function About() {
  useSeo('About Us', 'Meet Lumina Dental Studio, an Austin, Texas practice built around gentle, transparent, modern dental care.')
  return (
    <>
      <PageHeader eyebrow="About us" title="A calmer, clearer way to care for your teeth." intro="Lumina Dental Studio opened in 2012 with one idea: dentistry should feel unhurried, honest and comfortable." />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <Reveal><img src="/images/clinic2.jpg" alt="Bright treatment room at Lumina Dental Studio" loading="lazy" className="rounded-2xl" /></Reveal>
        <Reveal>
          <h2 className="text-3xl">Technology that serves the patient</h2>
          <p className="mt-4 leading-relaxed">Our Austin studio combines digital imaging, 3D planning and comfort-first techniques with the personal attention of a small practice. We explain every option, show you what we see and never rush a decision.</p>
          <dl className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[['12+', 'Years in Austin'], ['9', 'Treatments'], ['3', 'Specialist dentists']].map(([n, l]) => (
              <div key={l} className="rounded-xl bg-teal-50 p-4"><dt className="font-serif text-3xl text-navy">{n}</dt><dd className="text-xs">{l}</dd></div>
            ))}
          </dl>
        </Reveal>
      </div>
      <Section tint eyebrow="Our values" title="What guides every visit">
        <div className="grid gap-5 md:grid-cols-3">
          {[['Gentle first', 'Comfort and clear communication come before any procedure.'], ['Transparent plans', 'You see options, timelines and next steps before you commit.'], ['Lasting results', 'Conservative, durable treatment designed to protect your natural teeth.']].map(([t, d]) => (
            <Reveal key={t}><div className="h-full rounded-2xl bg-white p-6"><h3 className="text-xl">{t}</h3><p className="mt-2 text-sm leading-relaxed">{d}</p></div></Reveal>
          ))}
        </div>
      </Section>
      <BookingCta />
    </>
  )
}

export function Dentists() {
  useSeo('Our Dentists', 'Meet the experienced dentists at Lumina Dental Studio in Austin, TX.')
  return (
    <>
      <PageHeader eyebrow="Our dentists" title="Experienced hands, friendly faces." intro="Sample profiles for the portfolio demo. Replace them in src/data/site.ts." />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3 md:py-24">{dentists.map((d) => <Reveal key={d.id}><DentistCard d={d} /></Reveal>)}</div>
      <BookingCta />
    </>
  )
}

export function Testimonials() {
  useSeo('Patient Testimonials', 'Read sample patient stories from Lumina Dental Studio. Portfolio demonstration content.')
  return (
    <>
      <PageHeader eyebrow="Testimonials" title="Patient stories" intro="These testimonials are fictional sample content for the portfolio demonstration." />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2 md:py-24">{testimonials.map((t) => <Reveal key={t.name}><TestimonialCard t={t} /></Reveal>)}</div>
      <Section tint eyebrow="Results gallery" title="Before and after" intro="Demonstration images. Drag the slider to compare.">
        <div className="grid gap-6 md:grid-cols-2">{beforeAfter.map((b) => <BeforeAfter key={b.title} {...b} />)}</div>
      </Section>
      <BookingCta />
    </>
  )
}

export function Faqs() {
  useSeo('FAQs', 'Answers to common questions about appointments, emergencies, whitening, Invisalign and root canals at Lumina Dental Studio.')
  return (
    <>
      <PageHeader eyebrow="FAQs" title="Questions, answered." />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24"><Accordion items={faqs} /><p className="mt-8 text-center">Still curious? <Link className="font-semibold text-navy underline" to="/contact">Contact us</Link>.</p></div>
    </>
  )
}

export function Contact() {
  useSeo('Contact', 'Call, message or visit Lumina Dental Studio at 1200 Congress Ave in Austin, Texas.')
  const rows = [
    ['Phone', clinic.phone, clinic.phoneHref], ['WhatsApp', 'Message us', clinic.whatsapp], ['Email', clinic.email, `mailto:${clinic.email}`], ['Address', `${clinic.address}, ${clinic.city}`, clinic.mapsHref],
  ]
  return (
    <>
      <PageHeader eyebrow="Contact" title="We would love to hear from you." intro="Contact details below are temporary placeholders for the demo." />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <ul className="space-y-3">{rows.map(([l, v, h]) => (
            <li key={l}><a href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center justify-between rounded-xl border border-navy/10 px-5 py-4 hover:border-teal"><span className="text-sm">{l}</span><strong className="text-navy">{v}</strong></a></li>
          ))}</ul>
          <h2 className="mt-10 text-2xl">Hours</h2>
          <ul className="mt-4 divide-y divide-navy/10 text-sm">{clinic.hours.map((h) => <li key={h.day} className="flex justify-between py-3"><span className="font-semibold text-navy">{h.day}</span><span>{h.time}</span></li>)}</ul>
          <Button to="/book-appointment" className="mt-8">Book an Appointment</Button>
        </div>
        <iframe title="Map to Lumina Dental Studio" src={clinic.mapsEmbed} loading="lazy" className="h-96 w-full rounded-2xl border-0 md:h-full md:min-h-[28rem]" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </>
  )
}

export function NotFound() {
  useSeo('Page not found', 'This page could not be found.', true)
  return <div className="mx-auto max-w-xl px-5 py-32 text-center"><h1 className="text-4xl">Page not found</h1><Button to="/" className="mt-8">Back to home</Button></div>
}
