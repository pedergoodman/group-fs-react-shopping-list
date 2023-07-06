import React from 'react'
import { Card, Col } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
const ShopItem = ({shoppingItem}) => {

  if (shoppingItem.isPurchased == true) {
      
  }

  return (
              <Card>
              <Card.Body>
              <Card.Title>{shoppingItem.item}</Card.Title>
              <Card.Text>
               {shoppingItem.quantity}:{shoppingItem.unit}
              </Card.Text>
              <span className='purchaseArea'>
              <Button variant='success'>Buy</Button>
              <Button variant='danger'>Remove</Button>
              </span>
            </Card.Body>
          </Card>
  )
}

export default ShopItem