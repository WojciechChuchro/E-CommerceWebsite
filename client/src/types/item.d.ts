import { Index } from "./index"

export interface Item {
  name: String | null
  count: Number | null
  price: Number | null
  image: String | null
}

export interface Items extends Index {
  items: [Item] | any
}
