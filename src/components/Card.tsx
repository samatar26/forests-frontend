import { Forest } from '../types'

type CardProps = {
  forest: Forest
}

export const Card: React.FC<CardProps> = ({ forest }) => {
  return (
    <article>
      <h1>{forest.name}</h1>
    </article>
  )
}

export default Card
