import React from 'react';

import Header from '../Header/Header.jsx'
import Title from '../Title/Title.jsx';
import './App.css';


function App() {
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
