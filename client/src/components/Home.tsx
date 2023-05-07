import { Col, Container, Row } from "react-bootstrap"
import Card from "./Card"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { getItems } from "../redux/features/itemSlice"
const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  // const items = useAppSelector((state) => state.items.items)
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
