import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
const ShopForm = ({addShopItem}) => {
  // STATES
  const [shopItem, setShopItem] = useState("");
  const [shopQuantity, setShopQuatity] = useState("");
  const [shopUnit, setShopUnit] = useState("");

  // On Submit function for Form
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted!");

    Swal.fire({
      icon: 'success',
      title: `Your item has been added to the list`,
      showConfirmButton: false,
      timer: 1000
    })

    // Post the Data
    addShopItem({
      item:shopItem,
      quantity:shopQuantity,
      unit:shopUnit
    })
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
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formItem">
      <Form.Label>Item:</Form.Label>
      <Form.Control type="text" placeholder="Enter an Item" onChange={event => setShopItem(event.target.value)} value={shopItem} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="quantityForm">
      <Form.Label>Quantity</Form.Label>
      <Form.Control type="number" placeholder="Enter Quantity"onChange={event => setShopQuatity(event.target.value)}
        value={shopQuantity} />
    </Form.Group>


    <Form.Group className="mb-3" controlId="unitForm">
      <Form.Label>Unit</Form.Label>
      <Form.Control type="text" placeholder="Enter Unit of Measurement"onChange={event => setShopUnit(event.target.value)}
        value={shopUnit} />
    </Form.Group>
    
    <Button variant="success" type="submit">
      Submit
    </Button>

  </Form>
  );
};

export default ShopForm;
