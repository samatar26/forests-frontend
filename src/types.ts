export type Forest = {
  name: string
  type: string
  description: string
  thumbnail: string

  country: string
  long_description?: string
  area?: number
  latitude?: number
  longitude?: number
  carbon_stored?: number
  change_in_carbon_stored?: number
  cover: string
}
