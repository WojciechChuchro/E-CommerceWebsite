import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Item } from "../types/item"

function ItemCard({ name, count, price, image }: Item) {
  return (
    <Card className="item-card">
      {/* <Card.Img variant="top" src={image} /> */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Count: {count}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <div className="item-button-container">
          <Button className="item-button" variant="success">
            +
          </Button>
          <Button className="item-button" variant="danger">
            -
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ItemCard
