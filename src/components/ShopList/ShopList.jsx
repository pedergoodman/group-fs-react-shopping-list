import React from 'react'
import Button from 'react-bootstrap/Button'
import ShopItem from '../ShopItem/ShopItem'
import './shopList.css'
const ShopList = ({shoppingList}) => {
  return (
    <>
    <div className='buttonDiv'>
      <Button variant="warning" className='resetButton'>Reset</Button>
      <Button variant ="danger" className='clearButton'>Clear</Button>
    </div>
    <div className='shoppingListDiv'>
    {shoppingList.map(shoppingItem => 
        <ShopItem key={shoppingItem.id} shoppingItem={shoppingItem}/>
      )}
      </div>
    </>
  )
}

export default ShopList