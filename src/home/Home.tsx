import { useQuery } from 'react-query'

import Card from '../components/Card'
import { getForests } from '../requests/forests'

const Home = () => {
  const { isSuccess, data } = useQuery('forests', getForests)

  return (
    isSuccess &&
    data?.map((forest) => <Card key={forest.name} forest={forest} />)
  )
}

export default Home
