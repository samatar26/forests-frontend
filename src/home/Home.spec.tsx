import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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
    expect(
      screen.getByText(
        'A moist broadleaf tropical rainforest in the Amazon biome that covers most of the Amazon basin of South America.'
      )
    ).toBeInTheDocument()
    expect(await screen.findByText('Type: conservation')).toBeInTheDocument()
  })

  it('displays an image of the forest', async () => {
    const amazonThumbnail = (await screen.findByTestId(
      'Amazon-thumbnail'
    )) as HTMLImageElement
    expect(amazonThumbnail).toBeInTheDocument()
    expect(amazonThumbnail.src).toBe('https://img.com/1')
  })

  it('takes the user to the detail page when they click on the forest thumbnail', async () => {
    const amazonThumbnail = (await screen.findByTestId(
      'Amazon-thumbnail'
    )) as HTMLImageElement

    await userEvent.click(amazonThumbnail)

    expect(screen.getByText('Country: Brazil')).toBeInTheDocument()
  })
})
