import React from 'react'
import Button from 'react-bootstrap/Button'
import ShopItem from '../ShopItem/ShopItem'
import './shopList.css'
const ShopList = ({shoppingList}) => {
  return (
    <>
    <div className='buttonDiv'>
      <Button variant="warning">Reset</Button>
      <Button variant ="danger">Clear</Button>
    </div>
    {shoppingList.map(shoppingItem => 
        <ShopItem key={shoppingItem.id} shoppingItem={shoppingItem}/>
      )}
    </>
  )
}

export default ShopList