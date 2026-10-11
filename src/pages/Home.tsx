import { Link } from 'react-router-dom'
import { clinic, dentists, services, testimonials, beforeAfter } from '../data/site'
import { BeforeAfter, BookingCta, Button, Reveal, Section, ServiceCard, useSeo } from '../components/ui'
import { DentistCard, TestimonialCard } from './Pages'

export default function Home() {
  useSeo(clinic.name, 'Lumina Dental Studio is a modern Austin, Texas dental practice offering general, cosmetic and emergency dentistry, implants and Invisalign.')
  return (
    <>
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
          <div>
            <p className="eyebrow mb-4">Austin, Texas · Accepting new patients</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl">Dentistry that feels as good as your smile looks.</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed">Gentle, modern care for the whole family, from routine cleanings to complete smile makeovers, in a calm studio downtown.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/book-appointment">Book an Appointment</Button>
              <Button to="/services" variant="outline">Explore Our Services</Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-navy">
              {['Same-day emergency care', '3D digital imaging', 'Comfort-first approach'].map((t) => <li key={t} className="flex items-center gap-2"><span className="text-[#2a9d95]" aria-hidden>✓</span>{t}</li>)}
            </ul>
          </div>
          <div className="relative">
            <img src="/images/hero.jpg" alt="Bright, modern treatment room at Lumina Dental Studio" width={1600} height={1067} fetchPriority="high" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl shadow-navy/15 md:aspect-[5/6]" />
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-navy/10 bg-white px-5 py-4 shadow-xl md:-left-6">
              <p className="text-teal" aria-hidden>★★★★★</p>
              <p className="text-sm"><strong className="text-navy">4.9 average</strong> · sample rating</p>
            </div>
          </div>
        </div>
      </section>

      <Section tint eyebrow="Featured treatments" title="Care for every stage of your smile">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.slice(0, 6).map((s) => <Reveal key={s.slug}><ServiceCard s={s} /></Reveal>)}</div>
        <div className="mt-10"><Button to="/services" variant="outline">View all 9 services</Button></div>
      </Section>

      <Section eyebrow="Our dentists" title="Meet the team behind your care" intro="Three experienced dentists, one shared promise: clear explanations and gentle treatment.">
        <div className="grid gap-6 md:grid-cols-3">{dentists.map((d) => <Reveal key={d.id}><DentistCard d={d} /></Reveal>)}</div>
      </Section>

      <Section tint eyebrow="Results" title="See the difference" intro="Demonstration images. Drag the slider to compare.">
        <div className="grid gap-6 md:grid-cols-2">{beforeAfter.map((b) => <BeforeAfter key={b.title} {...b} />)}</div>
      </Section>

      <Section eyebrow="Testimonials" title="Patients who feel at home">
        <div className="grid gap-6 md:grid-cols-3">{testimonials.slice(0, 3).map((t) => <Reveal key={t.name}><TestimonialCard t={t} /></Reveal>)}</div>
        <p className="mt-8 text-sm">Sample testimonials for portfolio purposes. <Link to="/testimonials" className="font-semibold text-navy underline">Read more</Link></p>
      </Section>

      <Section tint eyebrow="Visit us" title="Find the studio">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6">
            <h3 className="text-xl">Clinic hours</h3>
            <ul className="mt-4 divide-y divide-navy/10 text-sm">{clinic.hours.map((h) => <li key={h.day} className="flex justify-between gap-4 py-3"><span className="font-semibold text-navy">{h.day}</span><span className="text-right">{h.time}</span></li>)}</ul>
          </div>
          <div className="rounded-2xl bg-white p-6">
            <h3 className="text-xl">Get in touch</h3>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <a className="block hover:text-navy" href={clinic.mapsHref} target="_blank" rel="noreferrer">{clinic.address}, {clinic.city}</a>
              <a className="block font-semibold text-navy" href={clinic.phoneHref}>{clinic.phone}</a>
              <a className="block hover:text-navy" href={`mailto:${clinic.email}`}>{clinic.email}</a>
            </address>
            <div className="mt-6 flex flex-wrap gap-3"><Button href={clinic.whatsapp} variant="outline">WhatsApp</Button><Button href={clinic.mapsHref} variant="outline">Google Maps</Button></div>
          </div>
        </div>
      </Section>
      <BookingCta />
    </>
  )
}
