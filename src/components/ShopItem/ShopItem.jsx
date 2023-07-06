import React from 'react'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
const ShopItem = () => {
  return (
    <>
   <Row xs={2} md={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>Item Name</Card.Title>
              <Card.Text>
               {} Unit: Item{}
              </Card.Text>
              <Button variant='success'>Buy</Button>
              <Button variant='danger'>Remove</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default ShopItem