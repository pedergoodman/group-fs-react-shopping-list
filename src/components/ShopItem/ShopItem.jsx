import React from 'react'
import { Card, Col } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import './shopItem.css'
const ShopItem = ({shoppingItem, updatePurchaseStatus}) => {


  const handleBuyButton = () => {
    console.log('buy button clicked!');
    updatePurchaseStatus(shoppingItem.id)
  } //end handleBuyButton


  let purchaseAreaDisplay = ''


  if (shoppingItem.isPurchased == true) {
  purchaseAreaDisplay = (<><p>Purchased!</p>
            </>)
  } else {
  purchaseAreaDisplay = (<><Button variant='success' size="sm" className='buyButton' onClick={handleBuyButton}>Buy</Button>
            <Button variant='danger' size="sm" className='removeButton'>Remove</Button>
            </>)
  }
  

  return (
            <div className='cardDiv'>
              <Card>
              <Card.Body>
              <Card.Title>{shoppingItem.item}</Card.Title>
              <Card.Text>
               {shoppingItem.quantity}:{shoppingItem.unit}
              </Card.Text>
              <span className='purchaseArea'>
              {purchaseAreaDisplay}
              </span>
            </Card.Body>
          </Card>
          </div>
  )
}

export default ShopItem