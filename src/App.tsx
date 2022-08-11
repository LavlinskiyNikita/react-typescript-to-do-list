import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

import { Product } from './component/product';
// import { products } from './data/products';
import { IProduct } from './modelss';

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  async function featchS() {
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=70')
    setProducts(response.data)
  }

  useEffect(() => {
    featchS()
  }, [])
  
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {
        products.map(product =>
          <Product product={product} key={product.id}/>)
      }
    </div>
  );
}

export default App;
