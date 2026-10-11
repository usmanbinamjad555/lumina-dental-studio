// Central seed data. Edit contact details here; every page reads from this file.
export const clinic = {
  name: 'Lumina Dental Studio',
  tagline: 'Modern dentistry, gentle care.',
  phone: '(512) 555-0142',
  phoneHref: 'tel:+15125550142',
  whatsapp: 'https://wa.me/15125550142',
  email: 'hello@luminadental.example',
  address: '1200 Congress Ave, Suite 210',
  city: 'Austin, TX 78701',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=1200+Congress+Ave+Austin+TX+78701',
  mapsEmbed: 'https://www.google.com/maps?q=1200+Congress+Ave+Austin+TX+78701&output=embed',
  siteUrl: 'https://lumina-dental-studio.vercel.app',
  hours: [
    { day: 'Monday – Thursday', time: '8:00 am – 5:30 pm' },
    { day: 'Friday', time: '8:00 am – 3:00 pm' },
    { day: 'Saturday', time: '9:00 am – 1:00 pm (by appointment)' },
    { day: 'Sunday', time: 'Closed · emergency line only' },
  ],
}

export type Service = {
  slug: string; title: string; short: string; image: string; duration: string; intro: string
  benefits: string[]; steps: string[]
}

export const services: Service[] = [
  { slug: 'general-dentistry', title: 'General Dentistry', image: '/images/general.jpg', duration: '45–60 min',
    short: 'Exams, cleanings, fillings and preventive care for the whole family.',
    intro: 'Healthy smiles start with consistent, comfortable preventive care. Our general visits combine thorough exams, digital X-rays and gentle cleanings with a clear plan you can understand.',
    benefits: ['Comprehensive exam and oral cancer screening', 'Low-dose digital X-rays', 'Tooth-colored fillings', 'Personalized home-care guidance'],
    steps: ['Review of health history', 'Exam and imaging', 'Professional cleaning', 'Treatment plan and next visit'] },
  { slug: 'cosmetic-dentistry', title: 'Cosmetic Dentistry', image: '/images/smile1.jpg', duration: 'Varies',
    short: 'Natural-looking smile design tailored to your face and goals.',
    intro: 'Cosmetic care at Lumina is about subtle, believable improvement. We plan every smile makeover with digital previews so you know what to expect before we begin.',
    benefits: ['Digital smile preview', 'Bonding and contouring', 'Combination treatment plans', 'Conservative, enamel-friendly approach'],
    steps: ['Smile consultation', 'Digital design preview', 'Treatment in comfortable phases', 'Final polish and review'] },
  { slug: 'teeth-whitening', title: 'Teeth Whitening', image: '/images/smile2.jpg', duration: '60–90 min',
    short: 'Professional whitening for a brighter smile in a single visit.',
    intro: 'Our in-office whitening is supervised by your dentist, protects your gums and is paired with take-home trays so your results last.',
    benefits: ['Up to several shades brighter', 'Gum protection and desensitizing care', 'Custom take-home trays', 'Safe for most healthy adults'],
    steps: ['Shade check and exam', 'Gum protection', 'Whitening session', 'Aftercare kit'] },
  { slug: 'veneers', title: 'Veneers', image: '/images/smile3.jpg', duration: '2 visits',
    short: 'Ultra-thin porcelain shells that reshape color, size and symmetry.',
    intro: 'Porcelain veneers can correct chips, gaps and discoloration. We design them to match your features so the result looks like you, only polished.',
    benefits: ['Custom-crafted porcelain', 'Stain-resistant surface', 'Minimal enamel removal', 'Long-lasting with good care'],
    steps: ['Consultation and mock-up', 'Preparation and impressions', 'Temporary veneers', 'Final bonding'] },
  { slug: 'dental-implants', title: 'Dental Implants', image: '/images/xray.jpg', duration: '3–6 months',
    short: 'Permanent tooth replacement that looks, feels and functions naturally.',
    intro: 'Implants replace the root and the crown, restoring bite strength and protecting jawbone. We plan each case with 3D imaging for predictable placement.',
    benefits: ['Stable, natural-feeling chewing', 'Preserves jawbone', 'No effect on neighboring teeth', 'Designed for decades of use'],
    steps: ['3D scan and planning', 'Implant placement', 'Healing period', 'Custom crown'] },
  { slug: 'invisalign', title: 'Invisalign', image: '/images/aligner.jpg', duration: '6–18 months',
    short: 'Clear aligners that straighten teeth discreetly.',
    intro: 'Clear aligner therapy lets you straighten teeth without brackets. A digital scan shows your projected progress before your first tray.',
    benefits: ['Nearly invisible trays', 'Removable for eating and cleaning', 'Digital progress tracking', 'Fewer in-office adjustments'],
    steps: ['Digital scan', 'Treatment simulation', 'Aligner series', 'Retainers'] },
  { slug: 'root-canals', title: 'Root Canals', image: '/images/procedure.jpg', duration: '60–90 min',
    short: 'Comfortable treatment that relieves pain and saves your natural tooth.',
    intro: 'Modern root canal therapy is far gentler than its reputation. We focus on numbing well, working efficiently and protecting the tooth afterward.',
    benefits: ['Relief from tooth pain', 'Keeps your natural tooth', 'Often completed in one visit', 'Comfort-focused anesthesia'],
    steps: ['Diagnosis and numbing', 'Cleaning the canals', 'Sealing', 'Crown placement'] },
  { slug: 'dental-crowns', title: 'Dental Crowns', image: '/images/consult.jpg', duration: '2 visits',
    short: 'Durable, natural-looking caps that restore strength and shape.',
    intro: 'Crowns protect weakened or broken teeth. Ours are color-matched ceramic restorations, designed to blend seamlessly with your smile.',
    benefits: ['Restores damaged teeth', 'Color-matched ceramic', 'Precise digital fit', 'Long-term protection'],
    steps: ['Exam and preparation', 'Digital impression', 'Temporary crown', 'Final fitting'] },
  { slug: 'emergency-dental-care', title: 'Emergency Dental Care', image: '/images/clinic.jpg', duration: 'Same day',
    short: 'Same-day help for toothaches, chips, and knocked-out teeth.',
    intro: 'Dental emergencies do not wait. Call us and we will do our best to see you the same day, relieve pain first and then plan lasting treatment.',
    benefits: ['Same-day appointments when possible', 'Pain relief first', 'Treatment for broken or knocked-out teeth', 'Clear aftercare guidance'],
    steps: ['Call the office', 'Rapid assessment', 'Urgent treatment', 'Follow-up plan'] },
]

export const dentists = [
  { id: 'elena-marsh', name: 'Dr. Elena Marsh, DDS', role: 'Founder · Cosmetic & Restorative', image: '/images/dr1.jpg',
    bio: 'Dr. Marsh founded Lumina in 2012 after training in advanced cosmetic dentistry. She is known for conservative, natural smile design.', focus: ['Veneers', 'Whitening', 'Crowns'] },
  { id: 'daniel-rahman', name: 'Dr. Daniel Rahman, DMD', role: 'Implants & Surgery', image: '/images/dr2.jpg',
    bio: 'Dr. Rahman places and restores dental implants using 3D guided planning, with a calm, step-by-step communication style.', focus: ['Implants', 'Root Canals', 'Emergency'] },
  { id: 'marcus-bell', name: 'Dr. Marcus Bell, DDS', role: 'General & Family Dentistry', image: '/images/dr3.jpg',
    bio: 'Dr. Bell cares for patients from age five up, with a focus on prevention, comfort and clear explanations.', focus: ['General', 'Invisalign', 'Preventive'] },
]

export const testimonials = [
  { name: 'Sarah M.', area: 'Zilker', text: 'I had avoided the dentist for years. The team at Lumina made me feel at ease from the first minute, and my whitening results look natural.', service: 'Teeth Whitening', image: '/images/smile1.jpg' },
  { name: 'James T.', area: 'South Congress', text: 'My implant process was clearly explained at every step. Comfortable, on schedule, and the crown looks just like my own tooth.', service: 'Dental Implants', image: '/images/smile3.jpg' },
  { name: 'Priya K.', area: 'Downtown', text: 'Invisalign here was easy. Check-ins were quick and the digital preview kept me motivated through the whole treatment.', service: 'Invisalign', image: '/images/smile2.jpg' },
  { name: 'Robert L.', area: 'Hyde Park', text: 'Cracked a tooth on a Saturday and they saw me that morning. Professional, kind, and the crown fit perfectly.', service: 'Emergency Care', image: '/images/smile3.jpg' },
]

export const faqs = [
  { q: 'Are you accepting new patients?', a: 'Yes. You can request a first visit through our booking page and we will confirm a time by phone or email.' },
  { q: 'Do you offer same-day emergency appointments?', a: 'We reserve time each day for urgent cases. Call us as early as possible and we will do our best to see you the same day.' },
  { q: 'How often should I have a checkup and cleaning?', a: 'Most patients benefit from a visit every six months. If you have gum concerns, we may suggest a more frequent schedule.' },
  { q: 'Is teeth whitening safe?', a: 'Professional whitening is safe for most healthy adults when supervised by a dentist. We check your gums and enamel first.' },
  { q: 'How long does Invisalign take?', a: 'Many cases take between 6 and 18 months depending on complexity. Your digital scan gives a projected timeline.' },
  { q: 'Do root canals hurt?', a: 'With modern anesthesia, most patients describe it as similar to getting a filling. The procedure relieves pain caused by infection.' },
  { q: 'Which insurance plans do you accept?', a: 'This is sample content for the portfolio demo. A real clinic would list accepted plans and financing options here.' },
]

export const beforeAfter = [
  { title: 'Whitening', image: '/images/smile2.jpg' },
  { title: 'Smile design', image: '/images/smile1.jpg' },
]

export const sampleAppointments = [
  { id: 'A-1001', name: 'Olivia Carter', email: 'olivia@example.com', phone: '(512) 555-0111', service: 'Teeth Whitening', dentist: 'Dr. Elena Marsh', date: '2026-10-20', time: '09:00', status: 'Pending' },
  { id: 'A-1002', name: 'Noah Reyes', email: 'noah@example.com', phone: '(512) 555-0122', service: 'Dental Implants', dentist: 'Dr. Daniel Rahman', date: '2026-10-21', time: '11:30', status: 'Confirmed' },
  { id: 'A-1003', name: 'Emma Brooks', email: 'emma@example.com', phone: '(512) 555-0133', service: 'Invisalign', dentist: 'Dr. Marcus Bell', date: '2026-10-22', time: '14:00', status: 'Pending' },
  { id: 'A-1004', name: 'Liam Foster', email: 'liam@example.com', phone: '(512) 555-0144', service: 'Emergency Dental Care', dentist: 'Dr. Daniel Rahman', date: '2026-10-14', time: '08:30', status: 'Completed' },
  { id: 'A-1005', name: 'Ava Nguyen', email: 'ava@example.com', phone: '(512) 555-0155', service: 'General Dentistry', dentist: 'Dr. Marcus Bell', date: '2026-10-23', time: '10:00', status: 'Cancelled' },
]
export const statuses = ['Pending', 'Confirmed', 'Completed', 'Cancelled'] as const
