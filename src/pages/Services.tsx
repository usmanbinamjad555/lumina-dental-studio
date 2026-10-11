import { Link, useParams } from 'react-router-dom'
import { services, clinic } from '../data/site'
import { BookingCta, Button, PageHeader, Reveal, ServiceCard, useSeo } from '../components/ui'
import { NotFound } from './Pages'

export function ServicesIndex() {
  useSeo('Dental Services', 'General, cosmetic and emergency dentistry, whitening, veneers, implants, Invisalign, root canals and crowns in Austin, TX.')
  return (
    <>
      <PageHeader eyebrow="Services" title="Complete dental care under one roof." intro="From routine cleanings to full smile makeovers, every treatment is planned around you." />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:grid-cols-2 md:py-24 lg:grid-cols-3">{services.map((s) => <Reveal key={s.slug}><ServiceCard s={s} /></Reveal>)}</div>
      <BookingCta />
    </>
  )
}

export function ServiceDetail() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  useSeo(s ? `${s.title} in Austin, TX` : 'Service', s ? `${s.short} ${s.title} at ${clinic.name} in Austin, Texas.` : '')
  if (!s) return <NotFound />
  return (
    <>
      <PageHeader eyebrow={`Services · ${s.duration}`} title={s.title} intro={s.intro} />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-5 md:py-24">
        <div className="md:col-span-3">
          <img src={s.image} alt={`${s.title} at Lumina Dental Studio`} width={800} height={600} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <h2 className="mt-10 text-2xl">What to expect</h2>
          <ol className="mt-5 space-y-3">{s.steps.map((st, i) => (
            <li key={st} className="flex items-center gap-4 rounded-xl border border-navy/10 p-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-100 text-sm font-semibold text-navy">{i + 1}</span>{st}</li>
          ))}</ol>
        </div>
        <aside className="md:col-span-2">
          <div className="sticky top-24 rounded-2xl bg-teal-50 p-6">
            <h2 className="text-xl">Benefits</h2>
            <ul className="mt-4 space-y-3 text-sm">{s.benefits.map((b) => <li key={b} className="flex gap-3"><span className="text-[#2a9d95]" aria-hidden>✓</span>{b}</li>)}</ul>
            <Button to={`/book-appointment?service=${s.slug}`} className="mt-6 w-full">Book {s.title}</Button>
            <a href={clinic.phoneHref} className="mt-3 block text-center text-sm font-semibold text-navy">or call {clinic.phone}</a>
          </div>
        </aside>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-16"><h2 className="text-2xl">Other treatments</h2>
        <ul className="mt-4 flex flex-wrap gap-2">{services.filter((x) => x.slug !== s.slug).map((x) => <li key={x.slug}><Link className="block rounded-full border border-navy/15 px-4 py-2 text-sm hover:border-teal hover:text-navy" to={`/services/${x.slug}`}>{x.title}</Link></li>)}</ul>
      </div>
      <BookingCta />
    </>
  )
}
