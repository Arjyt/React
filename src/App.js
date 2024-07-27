import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

import Header from './components/header';
import Content from './components/Content';
import Cards from './components/cards';
import Cart from './components/Cart';

function App() {
  const [product, setProduct] = useState([]);

  async function fetchData() {
    const API_URL = "https://fakestoreapi.com/products";
    let response = await fetch(API_URL);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    
     <div className="App">
       <Header/>
       <Content/>
       <Cards product={product} />
       
            </div>
      
  );
}

export default App;