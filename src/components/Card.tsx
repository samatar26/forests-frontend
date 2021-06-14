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
      <CardThumbnail
        data-testid={`${forest.name}-thumbnail`}
        src={forest.thumbnail}
      />
      <CardTitle>{forest.name}</CardTitle>
      <CardDescription>{forest.description}</CardDescription>
      <span>{forest.type}</span>
    </CardContainer>
  )
}

export default Card
