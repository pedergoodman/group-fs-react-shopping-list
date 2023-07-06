import React from 'react'
import Button from 'react-bootstrap/Button'
import ShopItem from '../ShopItem/ShopItem'
import { Container} from 'react-bootstrap'
const ShopList = ({shoppingList, resetPurchases, updatePurchaseStatus }) => {
  
  const handleResetButton = () => {
    console.log('reset button clicked');
    resetPurchases()
  } // end handleResetButton
  
  return (
    <>
    <div>
      <Button variant="warning" onClick={handleResetButton}>Reset</Button>
      <Button variant ="danger">Clear</Button>
    </div>
    {shoppingList.map(shoppingItem => 
        <ShopItem 
          key={shoppingItem.id}
          shoppingItem={shoppingItem}
          updatePurchaseStatus={updatePurchaseStatus}
        />
      )}
    </>
  )
}

export default ShopList