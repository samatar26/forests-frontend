import { Forest } from '../types'

export const getForests = (): Promise<Array<Forest>> =>
  fetch('https://samatar.dev/api/').then((res) => res.json())
