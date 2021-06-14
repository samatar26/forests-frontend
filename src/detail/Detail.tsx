import React from 'react'
import { useQuery } from 'react-query'

import { getForests } from '../requests/forests'

export const Detail = () => {
  const { isSuccess, data } = useQuery('forests', getForests)
  if (!isSuccess || !data) return null

  const forestName = new URLSearchParams(document.location.search).get('forest')

  const forest = data.find((forest) => forest.name == forestName)
  if (!forest) return null

  return (
    <div>
      <span>{forest.country}</span>
    </div>
  )
}

export default Detail
