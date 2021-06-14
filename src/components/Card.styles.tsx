import styled from 'styled-components'

import colors from '../styles/colors'
import space from '../styles/spacing'

export const CardContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 300px;
  min-width: 300px;
  max-width: 300px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: ${space[5]};
  font-size: 12px;
  border-radius: ${space[1]};
`

export const CardTitle = styled.h1`
  position: absolute;
  top: -${space[3]};
  margin: 0;
  padding: ${space[1]} ${space[2]} ${space[1]} ${space[1]};
  color: ${colors.text.white};
  background-color: ${colors.blue};
  border-radius: ${space[1]};
  font-size: 12px;
`

export const CardDescription = styled.p`
  font-size: 10px;
`

export const CardThumbnail = styled.img`
  cursor: pointer;
`
