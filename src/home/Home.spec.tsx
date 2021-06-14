import { render, screen } from '@testing-library/react'

import BaseApp from '../BaseApp'

describe('Home', () => {
  beforeEach(() => {
    render(<BaseApp />)
  })

  it('displays hello world', () => {
    expect(screen.getByText('Hello world!')).toBeInTheDocument()
  })
})
