export interface PersonName {
  title: string
  first: string
  last: string
}

export interface Person {
  name: PersonName
  country: string
  city: string
  email: string
  phone: string
  image: string
}

export interface Subtitle {
  main: string
  emphasis: string
}

export interface Content {
  title: string
  subtitle: Subtitle
  description: string
  image?: string
}
