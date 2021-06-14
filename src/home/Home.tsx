import { useQuery } from 'react-query'

import Card from '../components/Card'
import { getForests } from '../requests/forests'

const Home = () => {
  const { isSuccess, data } = useQuery('forests', getForests)

  if (!isSuccess || !data) return null

  return (
    <main>
      {data.map((forest) => (
        <Card key={forest.name} forest={forest} />
      ))}
    </main>
  )
}

export default Home
