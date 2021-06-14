export type Forest = {
  name: string
  type: string
  description: string
  thumbnail: string

  country: string
  longDescription?: string
  area?: number
  latitude?: number
  longitude?: number
  carbonStored?: number
  changeInCarbonStored?: number
}
