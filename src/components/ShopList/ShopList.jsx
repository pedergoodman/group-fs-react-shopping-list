import React from 'react'
import Button from 'react-bootstrap/Button'
import ShopItem from '../ShopItem/ShopItem'
const ShopList = () => {
  return (
    <>
    <div>
      <Button variant="warning">Reset</Button>
      <Button variant ="danger">Clear</Button>
    </div>
    <div><ShopItem/></div>    
    <div><ShopItem/></div>
    </>
  )
}

export default ShopList