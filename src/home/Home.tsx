import { useQuery } from 'react-query'

import Card from '../components/Card'
import { getForests } from '../requests/forests'
import { Main } from './Home.styles'

const Home = () => {
  const { isSuccess, data } = useQuery('forests', getForests)

  if (!isSuccess || !data) return null

  return (
    <Main>
      {data.map((forest) => (
        <Card key={forest.name} forest={forest} />
      ))}
    </Main>
  )
}

export default Home
