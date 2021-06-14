import styled from 'styled-components'

import media from '../styles/breakpoints'
import space from '../styles/spacing'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: ${space[2]};
  @media (max-width: ${media.sm}) {
    font-size: 14px;
  }
`
export const Cover = styled.img`
  height: 300px;
  object-fit: cover;
  margin: 0 auto;
  border-radius: ${space[2]};
`

export const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${space[6]};
  align-items: center;
`

export const LongDescription = styled.p`
  max-width: 80ch;
`
