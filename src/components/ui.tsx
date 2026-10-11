import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { clinic, type Service } from '../data/site'

export function useSeo(title: string, description: string, noindex = false) {
  useEffect(() => {
    document.title = title === clinic.name ? `${clinic.name} | Dentist in Austin, TX` : `${title} | ${clinic.name}`
    const set = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`)
      if (!m) { m = document.createElement('meta'); m.setAttribute('name', name); document.head.appendChild(m) }
      m.setAttribute('content', content)
    }
    set('description', description)
    set('robots', noindex ? 'noindex' : 'index, follow')
    window.scrollTo(0, 0)
  }, [title, description, noindex])
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal h-full ${className}`}>{children}</div>
}

type BtnProps = { to?: string; href?: string; variant?: 'primary' | 'outline' | 'light'; children: ReactNode; className?: string }
export function Button({ to, href, variant = 'primary', children, className = '' }: BtnProps) {
  const styles = {
    primary: 'bg-navy text-white hover:bg-navy-700',
    outline: 'border border-navy/25 text-navy hover:border-navy hover:bg-navy/5',
    light: 'bg-white text-navy hover:bg-teal-100',
  }[variant]
  const cls = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles} ${className}`
  return to ? <Link to={to} className={cls}>{children}</Link> : <a href={href} className={cls}>{children}</a>
}

export function Section({ eyebrow, title, intro, children, tint = false }: { eyebrow?: string; title: string; intro?: string; children: ReactNode; tint?: boolean }) {
  return (
    <section className={tint ? 'bg-teal-50' : ''}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal className="mb-10 max-w-2xl">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 className="text-3xl md:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg leading-relaxed">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="bg-teal-50">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed">{intro}</p>}
      </div>
    </header>
  )
}

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link to={`/services/${s.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-navy/10 bg-white transition-shadow hover:shadow-xl hover:shadow-navy/10">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={s.image} alt="" loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl">{s.title}</h3>
        <p className="mt-2 text-sm leading-relaxed">{s.short}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-navy">Learn more →</span>
      </div>
    </Link>
  )
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white">
      {items.map((f, i) => (
        <div key={f.q}>
          <h3 className="!font-sans">
            <button type="button" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-navy">
              {f.q}
              <span aria-hidden className={`text-xl text-teal transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
            </button>
          </h3>
          <div id={`faq-${i}`} role="region" hidden={open !== i} className="px-6 pb-5 leading-relaxed">{f.a}</div>
        </div>
      ))}
    </div>
  )
}

export function BeforeAfter({ image, title }: { image: string; title: string }) {
  const [pos, setPos] = useState(50)
  return (
    <figure className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
      <div className="relative aspect-[4/3] select-none overflow-hidden">
        <img src={image} alt={`${title} after treatment (demonstration)`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={image} alt={`${title} before treatment (demonstration)`} loading="lazy" className="h-full w-full object-cover" style={{ filter: 'sepia(.55) saturate(.7) brightness(.82) contrast(.95)' }} />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold text-white">Before</span>
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy">After</span>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }} />
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} aria-label={`Compare before and after: ${title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      </div>
      <figcaption className="flex items-center justify-between px-5 py-4 text-sm"><span className="font-semibold text-navy">{title}</span><span>Drag to compare · demo image</span></figcaption>
    </figure>
  )
}

export function BookingCta() {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl !text-white md:text-4xl">Ready for a healthier, brighter smile?</h2>
          <p className="mt-3 max-w-xl text-white/75">Request a visit online in under a minute. We will confirm your time by phone or email.</p>
        </div>
        <Button to="/book-appointment" variant="light">Book an Appointment</Button>
      </div>
    </section>
  )
}
