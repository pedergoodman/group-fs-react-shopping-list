import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from "../Header/Header.jsx";
import ShopForm from "../ShopForm/ShopForm.jsx";
import Title from "../Title/Title.jsx";
import "./App.css";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const getShoppingList = () => {
    axios
      .get("/shopping-list")
      .then(response => {
        console.log("response is:", response);
        setShoppingList(response.data)
        console.log("response data is:", response.data);
      })
      .catch(err => {
        console.log("Error GETing shopping list:", err);
        alert("Error GETing shopping list");
      });
  }; // end getShoppingList

  const postShoppingList = (addShopItem) => {
      axios({
          method:'POST',
          url:'/shopping-list',
          data:addShopItem,
      }).then((response) => {
          getShoppingList();
          console.log('Response:',response)
      }).catch((error) => {
          console.log('ERROR:',error);
          alert('ERROR in POST:', error)
      })
  };
  useEffect(() => {
    getShoppingList();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Title title="Add an Item" />
        <ShopForm addShopItem={postShoppingList}/>
        <Title title="Shopping List" />
      </main>
    </div>
  );
}

export default App;
