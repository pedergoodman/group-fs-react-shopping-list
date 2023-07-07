import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./shopItem.css";
import Swal from "sweetalert2";
const ShopItem = ({ shoppingItem, updatePurchaseStatus, removeShopItem }) => {
  const handleBuyButton = () => {
    Swal.fire({
      icon: 'success',
      title: `Your item has been purchased`,
      showConfirmButton: false,
      timer: 1500
    })
    console.log("buy button clicked!");
    updatePurchaseStatus(shoppingItem.id);
  }; //end handleBuyButton

  if (shoppingItem.isPurchased == true) {
  }
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This will remove the selected item!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeShopItem(shoppingItem.id);
        Swal.fire(
          'Deleted!',
          'Your item has been deleted.',
          'success'
        )
      }
    })
    console.log("Remove!");
  };

  let purchaseAreaDisplay = ''


  if (shoppingItem.isPurchased == true) {
  purchaseAreaDisplay = (<><p>Purchased!</p> <Button variant='danger' size="sm" className='removeButton' onClick={handleDelete}>Remove</Button>
            </>)
  } else {
  purchaseAreaDisplay = (<><Button variant='success' size="sm" className='buyButton' onClick={handleBuyButton}>Buy</Button>
            <Button variant='danger' size="sm" className='removeButton' onClick={handleDelete}>Remove</Button>
            </>)
  }

  return (
    <div className="cardDiv">
      <Card>
        <Card.Body>
          <Card.Title>{shoppingItem.item}</Card.Title>
          <Card.Text>
            {shoppingItem.quantity} {shoppingItem.unit}
          </Card.Text>
          <span className="purchaseArea">
           {purchaseAreaDisplay}
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ShopItem;
