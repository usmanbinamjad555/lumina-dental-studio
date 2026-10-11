import { useState } from 'react'
import { statuses } from '../data/site'
import { PageHeader, useSeo } from '../components/ui'
import { useAppointments } from '../lib/appointments'

const tone: Record<string, string> = {
  Pending: 'bg-amber-100 text-amber-900', Confirmed: 'bg-teal-100 text-navy', Completed: 'bg-navy/10 text-navy', Cancelled: 'bg-red-100 text-red-900',
}

export default function Admin() {
  useSeo('Admin Preview', 'Demo appointment list.', true)
  const { list, setStatus, reset } = useAppointments()
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? list : list.filter((a) => a.status === filter)
  return (
    <>
      <PageHeader eyebrow="Admin preview" title="Appointment requests" intro="Demo only: sample data plus requests saved in this browser. No login, no server." />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-6 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by status">
          {['All', ...statuses].map((s) => (
            <button key={s} type="button" aria-pressed={filter === s} onClick={() => setFilter(s)}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${filter === s ? 'border-navy bg-navy text-white' : 'border-navy/20 text-navy hover:border-navy'}`}>
              {s} ({s === 'All' ? list.length : list.filter((a) => a.status === s).length})
            </button>
          ))}
          <button type="button" onClick={reset} className="ml-auto text-sm font-medium text-navy underline">Reset sample data</button>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-navy/10">
          <table className="w-full min-w-[720px] text-left text-sm">
            <caption className="sr-only">Appointment requests</caption>
            <thead className="bg-teal-50 text-navy"><tr>{['Ref', 'Patient', 'Service', 'Dentist', 'When', 'Status'].map((h) => <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-navy/10">
              {shown.map((a) => (
                <tr key={a.id}>
                  <td className="px-4 py-3">{a.id}</td>
                  <td className="px-4 py-3"><strong className="block text-navy">{a.name}</strong>{a.phone}</td>
                  <td className="px-4 py-3">{a.service}</td><td className="px-4 py-3">{a.dentist}</td>
                  <td className="px-4 py-3">{a.date}<br />{a.time}</td>
                  <td className="px-4 py-3">
                    <label className="sr-only" htmlFor={`st-${a.id}`}>Status for {a.name}</label>
                    <select id={`st-${a.id}`} value={a.status} onChange={(e) => setStatus(a.id, e.target.value)} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${tone[a.status]}`}>
                      {statuses.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
              {!shown.length && <tr><td colSpan={6} className="px-4 py-10 text-center">No requests with this status.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
