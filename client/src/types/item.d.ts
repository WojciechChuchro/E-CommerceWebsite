import { Index } from "./index"

export interface Item {
  name: string
  count: string
  price: string
  image: string
}

export interface Items extends Index {
  items: [Item] | any
}
