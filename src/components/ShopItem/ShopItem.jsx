import React from 'react'
import { Card, Col } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
const ShopItem = ({shoppingItem, updatePurchaseStatus}) => {


  const handleBuyButton = () => {
    console.log('buy button clicked!');
    updatePurchaseStatus(shoppingItem.id)
  } //end handleBuyButton



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
              <Button variant='success' onClick={handleBuyButton}>Buy</Button>
              <Button variant='danger'>Remove</Button>
              </span>
            </Card.Body>
          </Card>
  )
}

export default ShopItem