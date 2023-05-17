import { Container } from "react-bootstrap"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { getItems } from "../redux/features/itemSlice"
import Loader from "./Loader"
import { Item } from "../types/item"
import ItemCard from "./ItemCard"

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  const items = useAppSelector((state) => state.items.items)
  const loading = useAppSelector((state) => state.items.status)
  return (
    <Container className="item-container">
      {loading === "loading" ? (
        <Loader />
      ) : (
        items.map((item: Item) => {
          return (
            <ItemCard
              key={item.name.toString()}
              count={item.count}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          )
        })
      )}
    </Container>
  )
}

export default Home
