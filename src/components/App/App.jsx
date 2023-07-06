import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from '../Header/Header.jsx'
import Title from '../Title/Title.jsx';
import './App.css';
import ShopList from '../ShopList/ShopList.jsx';








function App() {

    const [ shoppingList, setShoppingList ] = useState([]);

    // GET request, 
    const getShoppingList = () => {
        axios.get('/shopping-list')
        .then((response) => {
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


    const updatePurchaseStatus = (itemToUpdate) => {
        
        axios.put(`/shopping-list/${itemToUpdate}`)
            .then((response) => {
                getShoppingList()
            }).catch((err) => {
                alert('Error updating purchase');
                console.log('Error updating purchase', err);
            });
    }; // end updatePurchaseStatus





    // Build App!
    return (
        <div className="App">
            <Header />
            <main>
              <Title title="Add an Item"/>  
              {/* Form in Progress */}
              <Title title="Shopping List"/> 
            </main>
        </div>
    );
}

export default App;
