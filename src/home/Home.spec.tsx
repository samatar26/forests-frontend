import { render, screen, waitFor } from '@testing-library/react'

import BaseApp from '../BaseApp'
import { server } from '../mocks/server'

describe('Home', () => {
  beforeEach(() => {
    render(<BaseApp />)
  })

  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' })
  })
  afterEach(() => {
    server.resetHandlers()
  })
  afterAll(() => {
    server.close()
  })

  it('displays Forests for the title of the page', async () => {
    await waitFor(() => expect(document.title).toEqual('Forests'))
  })

  it('displays a forest name, type and description', async () => {
    expect(await screen.findByText('Amazon')).toBeInTheDocument()
  })
})
