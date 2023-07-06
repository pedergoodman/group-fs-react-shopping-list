import { useState } from "react";

const ShopForm = () => {
  // STATES
  const [shopItem, setShopItem] = useState("");
  const [shopQuantity, setShopQuatity] = useState("");
  const [shopUnit, setShopUnit] = useState("");

  // On Submit function for Form
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted!");
    // Empty the values
    setShopItem("");
    setShopQuatity("");
    setShopUnit("");
  };

  // CHECKING THE LOGS:
  // console.log('Shop Item:', shopItem);
  // console.log('Shop Quantity:', shopQuantity);
  // console.log('Shop Unit:', shopUnit);
  return (
    <form onSubmit={handleSubmit}>
      <label>Item:</label>
      <input
        type="text"
        onChange={event => setShopItem(event.target.value)}
        value={shopItem}
      />

      <div>
        <label>Quantity:</label>
        <input
          type="number"
          onChange={event => setShopQuatity(event.target.value)}
          value={shopQuantity}
        />

        <label>Unit:</label>
        <input
          type="text"
          onChange={event => setShopUnit(event.target.value)}
          value={shopUnit}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ShopForm;
