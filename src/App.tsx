import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { About, Dentists, Testimonials, Faqs, Contact, NotFound } from './pages/Pages'
import { ServicesIndex, ServiceDetail } from './pages/Services'
import Book from './pages/Book'

const Admin = lazy(() => import('./pages/Admin'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dentists" element={<Dentists />} />
        <Route path="services" element={<ServicesIndex />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book-appointment" element={<Book />} />
        <Route path="admin" element={<Suspense fallback={null}><Admin /></Suspense>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
