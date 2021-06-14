import { darken } from 'polished'

const blue = '#1976d2'
const ctaPrimaryColour = blue
const ctaHoverColour = darken(0.1, ctaPrimaryColour)

const colors = {
  blue,
  text: {
    primary: '#0b0c0c',
    secondary: '#505a5f',
    white: '#fff',
  },
  cta: {
    primary: ctaPrimaryColour,
    hover: ctaHoverColour,
  },
}

export default colors
