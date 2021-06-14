import { Forest } from '../types'

export const getForests = (): Promise<Array<Forest>> =>
  fetch('https://forests-feext7dgzq-ey.a.run.app/').then((res) => res.json())
