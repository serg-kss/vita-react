import { create } from 'zustand'

export const useModeSwitchStore = create((set) => ({
  mode: true,
  setMode: () => set((state) => ({mode: !state.mode})),
}))