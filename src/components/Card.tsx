import { Link } from 'react-router-dom'

import { Forest } from '../types'
import {
  CardContainer,
  CardDescription,
  CardThumbnail,
  CardTitle,
} from './Card.styles'

type CardProps = {
  forest: Forest
}

export const Card: React.FC<CardProps> = ({ forest }) => {
  return (
    <CardContainer>
      <Link to={`/detail?forest=${forest.name}`}>
        <CardThumbnail
          data-testid={`${forest.name}-thumbnail`}
          src={forest.thumbnail}
        />
      </Link>
      <CardTitle>{forest.name}</CardTitle>
      <CardDescription>{forest.description}</CardDescription>
      <span>Type: {forest.type}</span>
    </CardContainer>
  )
}

export default Card
