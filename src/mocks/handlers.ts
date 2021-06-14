import { rest } from 'msw'

import { forestMock } from './mocks'

export const handlers = [
  rest.get('https://forests-feext7dgzq-ey.a.run.app/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([forestMock]))
  }),
]
