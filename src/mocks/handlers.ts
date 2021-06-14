import { rest } from 'msw'

import { forestMock } from './mocks'

export const handlers = [
  rest.get('https://samatar.dev/api/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([forestMock]))
  }),
]
