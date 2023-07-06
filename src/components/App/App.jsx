import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from '../Header/Header.jsx'
import ShopForm from '../ShopForm/ShopForm.jsx';
import Title from '../Title/Title.jsx';
import './App.css';
import ShopList from '../ShopList/ShopList.jsx';





function App() {

    const [ shoppingList, setShoppingList ] = useState([]);


    // GET request, 
    const getShoppingList = () => {
        axios.get('/shopping-list')
        .then((response) => {
            setShoppingList(response.data)
            console.log('response is:', response);
            console.log('response data is:', response.data);
        }).catch((err) => {
            console.log('Error GETing shopping list:', err);
            alert('Error GETing shopping list')
        });
    }; // end getShoppingList

    // Initial load of shopping list
    useEffect( () => {
        getShoppingList();
    }, []);

    // PUT request - when clicking BUY button
    const updatePurchaseStatus = (itemToUpdate) => {
        axios.put(`/shopping-list/${itemToUpdate}`)
            .then((response) => {
                getShoppingList()
            }).catch((err) => {
                alert('Error updating purchase');
                console.log('Error updating purchase', err);
            });
    }; // end updatePurchaseStatus


    // PUT request - clicking reset button
    const resetPurchases = () => {
        axios.put(`/shopping-list`)
            .then((response) => {
                getShoppingList()
            }).catch((err) => {
                alert('Error updating purchase');
                console.log('Error updating purchase', err);
            });
    }; // end resetPurchases





    // Build App!
    return (
        <div className="App">
            <Header />
            <main>
              <Title title="Add an Item"/>  
              <ShopForm/>
              <Title title="Shopping List"/> 
            </main>
            <ShopList shoppingList={shoppingList} resetPurchases={resetPurchases} updatePurchaseStatus={updatePurchaseStatus} />
        </div>
    );
}

export default App;
