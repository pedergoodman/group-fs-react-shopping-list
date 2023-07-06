import React from 'react'
import { Card, Col } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import './shopItem.css'
const ShopItem = ({shoppingItem, removeShopItem}) => {

  if (shoppingItem.isPurchased == true) {
      
  }
 const handleDelete = () => {
   removeShopItem(shoppingItem.id);
   console.log('Remove!');
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
              <Button variant='success' size="sm" className='buyButton'>Buy</Button>
              <Button variant='danger' size="sm" className='removeButton' onClick={handleDelete}>Remove</Button>
              </span>
            </Card.Body>
          </Card>
          </div>
  )
}

export default ShopItem