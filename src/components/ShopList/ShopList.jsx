import React from 'react'
import Button from 'react-bootstrap/Button'
import ShopItem from '../ShopItem/ShopItem'
import { Container} from 'react-bootstrap'
import './shopList.css'

const ShopList = ({shoppingList, resetPurchases, updatePurchaseStatus }) => {
  
  const handleResetButton = () => {
    console.log('reset button clicked');
    resetPurchases()
  } // end handleResetButton
  
  return (
    <>
    <div className='buttonDiv'>
      <Button variant="warning" className='resetButton' onClick={handleResetButton}>Reset</Button>
      <Button variant ="danger" className='clearButton'>Clear</Button>
    </div>
    <div className='shoppingListDiv'>
    {shoppingList.map(shoppingItem => 
        <ShopItem 
          key={shoppingItem.id}
          shoppingItem={shoppingItem}
          updatePurchaseStatus={updatePurchaseStatus}
        />
      )}
      </div>
    </>
  )
}

export default ShopList