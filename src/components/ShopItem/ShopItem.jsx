import React from "react";
import { Card, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./shopItem.css";
const ShopItem = ({ shoppingItem, updatePurchaseStatus, removeShopItem }) => {
  const handleBuyButton = () => {
    console.log("buy button clicked!");
    updatePurchaseStatus(shoppingItem.id);
  }; //end handleBuyButton

  if (shoppingItem.isPurchased == true) {
  }
  const handleDelete = () => {
    removeShopItem(shoppingItem.id);
    console.log("Remove!");
  };

  return (
    <div className="cardDiv">
      <Card>
        <Card.Body>
          <Card.Title>{shoppingItem.item}</Card.Title>
          <Card.Text>
            {shoppingItem.quantity}:{shoppingItem.unit}
          </Card.Text>
          <span className="purchaseArea">
            <Button
              variant="success"
              size="sm"
              className="buyButton"
              onClick={handleBuyButton}
            >
              Buy
            </Button>
            <Button
              variant="danger"
              size="sm"
              className="removeButton"
              onClick={handleDelete}
            >
              Remove
            </Button>
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShopItem;
