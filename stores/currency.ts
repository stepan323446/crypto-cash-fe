import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  currentCurrencyCode: string
}
type Actions = {
  setCurrent: (code: string) => void
}

export const useFiatStore = create<State & Actions>()(
  persist(
    (set) => ({
      currentCurrencyCode: 'USD',
      setCurrent: (code) => set({ currentCurrencyCode: code }),
    }),
    { name: 'fiat-storage' }
  )
)