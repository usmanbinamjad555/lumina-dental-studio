import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { clinic, services } from '../data/site'
import { Button } from './ui'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/dentists', label: 'Dentists' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Reviews' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
]

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${clinic.name} home`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy">
        <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden><path d="M16 4l3 7.5L26.5 14.5 19 17.5 16 25l-3-7.5L5.5 14.5 13 11.5z" fill="#5fd0c8" /></svg>
      </span>
      <span className={`font-serif text-lg font-semibold ${light ? 'text-white' : 'text-navy'}`}>Lumina <span className="font-normal">Dental Studio</span></span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  const link = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-navy ${isActive ? 'text-navy' : 'text-ink'}`
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded focus:bg-white focus:p-2">Skip to content</a>
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'} className={link}>{n.label}</NavLink>)}
          <Button to="/book-appointment" className="!px-5 !py-2.5">Book Now</Button>
        </nav>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-lg lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-navy" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-navy/10 bg-white px-5 pb-5 lg:hidden">
        <ul className="flex flex-col py-2">
          {nav.map((n) => (
            <li key={n.to}><NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => `block py-3 text-base font-medium ${isActive ? 'text-navy' : 'text-ink'}`}>{n.label}</NavLink></li>
          ))}
        </ul>
        <Button to="/book-appointment" className="w-full">Book an Appointment</Button>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-navy text-white/75">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">{clinic.tagline} Serving families across Austin, Texas.</p>
        </div>
        <div>
          <h2 className="!font-sans text-sm font-semibold !text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => <li key={s.slug}><Link className="hover:text-white" to={`/services/${s.slug}`}>{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="!font-sans text-sm font-semibold !text-white">Visit</h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <a className="block hover:text-white" href={clinic.mapsHref} target="_blank" rel="noreferrer">{clinic.address}<br />{clinic.city}</a>
            <a className="block hover:text-white" href={clinic.phoneHref}>{clinic.phone}</a>
            <a className="block hover:text-white" href={`mailto:${clinic.email}`}>{clinic.email}</a>
            <a className="block hover:text-white" href={clinic.whatsapp} target="_blank" rel="noreferrer">WhatsApp us</a>
          </address>
        </div>
        <div>
          <h2 className="!font-sans text-sm font-semibold !text-white">Hours</h2>
          <ul className="mt-4 space-y-2 text-sm">{clinic.hours.map((h) => <li key={h.day}><span className="text-white">{h.day}</span><br />{h.time}</li>)}</ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs">
          © {new Date().getFullYear()} {clinic.name}. Fictional clinic created for a portfolio demonstration. Testimonials, dentists and contact details are sample content.
          {' '}<Link to="/admin" className="underline hover:text-white">Admin preview</Link>
        </p>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  )
}
