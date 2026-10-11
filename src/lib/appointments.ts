import { useCallback, useState } from 'react'
import { sampleAppointments } from '../data/site'

export type Appointment = (typeof sampleAppointments)[number]
const KEY = 'lumina-appointments-v1'

function load(): Appointment[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw)
  } catch { /* storage unavailable */ }
  return sampleAppointments
}
function save(list: Appointment[]) {
  try { localStorage.setItem(KEY, JSON.stringify(list)) } catch { /* ignore */ }
}

export function useAppointments() {
  const [list, setList] = useState<Appointment[]>(load)
  const update = useCallback((next: Appointment[]) => { setList(next); save(next) }, [])
  const add = (a: Omit<Appointment, 'id' | 'status'>) => {
    const id = `A-${1000 + list.length + 1}`
    update([{ ...a, id, status: 'Pending' }, ...list])
    return id
  }
  const setStatus = (id: string, status: string) =>
    update(list.map((a) => (a.id === id ? { ...a, status } : a)))
  const reset = () => update(sampleAppointments)
  return { list, add, setStatus, reset }
}
