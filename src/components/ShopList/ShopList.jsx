import React from "react";
import Button from "react-bootstrap/Button";
import ShopItem from "../ShopItem/ShopItem";
import "./shopList.css";

const ShopList = ({
  shoppingList,
  resetPurchases,
  updatePurchaseStatus,
  removeShopItems,
  clearPurchases,
}) => {
  const handleResetButton = () => {
    console.log("reset button clicked");
    resetPurchases();
  }; // end handleResetButton

  const handleClearButton = () => {
    console.log("clear Button Pressed")
    clearPurchases()
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
