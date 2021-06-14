import { useQuery } from 'react-query'

import { getForests } from '../requests/forests'
import {
  Container,
  Cover,
  LongDescription,
  MetricsContainer,
} from './Detail.styles'

export const Detail = () => {
  const { isSuccess, data } = useQuery('forests', getForests)
  if (!isSuccess || !data) return null

  const forestName = new URLSearchParams(document.location.search).get('forest')

  const forest = data.find((forest) => forest.name == forestName)
  if (!forest) return null

  return (
    <Container>
      <Cover src={forest.cover} />
      <MetricsContainer>
        <span>Area: {forest.area}</span>
        <span>
          Location: {forest.latitude}/{forest.longitude}
        </span>
        <span>Country: {forest.country}</span>
        <LongDescription>{forest.long_description}</LongDescription>

        <span>Amount of CO2 stored: {forest.carbon_stored}</span>
        <span>
          Change in CO2 stored in the last 30 days:{' '}
          {forest.change_in_carbon_stored}
        </span>
      </MetricsContainer>
    </Container>
  )
}

export default Detail
