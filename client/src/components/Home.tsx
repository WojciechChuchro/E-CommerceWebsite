import { Col, Container, Row } from "react-bootstrap"
import Card from "./Card"
const Home = () => {
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
