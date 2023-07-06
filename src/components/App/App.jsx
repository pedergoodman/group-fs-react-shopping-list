import React, { useState, useEffect } from 'react';

import Header from '../Header/Header.jsx'
import './App.css';








function App() {

    const [ shoppingList, setShoppingList ] = useState([]);

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


    useEffect( () => {
        getShoppingList();
    }, []);


    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
