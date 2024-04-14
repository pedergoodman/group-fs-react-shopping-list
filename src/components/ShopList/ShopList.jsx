import React from "react";
import Button from "react-bootstrap/Button";
import ShopItem from "../ShopItem/ShopItem";
import "./shopList.css";
import Swal from "sweetalert2";

const ShopList = ({
  shoppingList,
  resetPurchases,
  updatePurchaseStatus,
  removeShopItems,
  clearPurchases,
}) => {
  const handleResetButton = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This will clear your purchased items!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear them!'
    }).then((result) => {
      if (result.isConfirmed) {
        resetPurchases();
        Swal.fire(
          'Cleared!',
          'Your items have been cleared.',
          'success'
        )
      }
    })
    console.log("reset button clicked");
  }; // end handleResetButton

  const handleClearButton = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This will clear all your items!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        clearPurchases()
        Swal.fire(
          'Deleted!',
          'Your list has been cleared.',
          'success'
        )
      }
    })
    console.log("clear Button Pressed")
 
  }

  return (
    <>
      <div className="buttonDiv">
        <Button
          variant="warning"
          className="resetButton"
          onClick={handleResetButton}
        >
          Reset
        </Button>
        <Button variant="danger" className="clearButton" onClick={handleClearButton}>
          Clear
        </Button>
      </div>
      <div className="shoppingListDiv">
        {shoppingList.map(shoppingItem => (
          <ShopItem
            key={shoppingItem.id}
            shoppingItem={shoppingItem}
            updatePurchaseStatus={updatePurchaseStatus}
            removeShopItem={removeShopItems}
          />
        ))}
      </div>
    </>
  );
};

export default ShopList;
