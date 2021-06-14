import { render, waitFor } from '@testing-library/react'

import BaseApp from '../BaseApp'

describe('Home', () => {
  beforeEach(() => {
    render(<BaseApp />)
  })

  it('displays Forests for the title of the page', async () => {
    await waitFor(() => expect(document.title).toEqual('Forests'))
  })
})
