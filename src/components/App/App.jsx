import React, { useState, useEffect } from 'react';

import Header from '../Header/Header.jsx'
import Title from '../Title/Title.jsx';
import './App.css';
import ShopList from '../ShopList/ShopList.jsx';
import axios from 'axios';





function App() {

    const [ shoppingList, setShoppingList ] = useState([]);

    useEffect(() => {
        getShoppingList()
      }, [])
    
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


    useEffect( () => {
        getShoppingList();
    }, []);


    return (
        <div className="App">
            <Header />
            <main>
              <Title title="Add an Item"/>  
              {/* Form in Progress */}
              <Title title="Shopping List"/> 
            </main>
            <ShopList shoppingList={shoppingList}/>
        </div>
    );
}

export default App;
