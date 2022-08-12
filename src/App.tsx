import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

import { CreateProdect } from './component/createProdect';
import { Modal } from './component/modal';
import { Product } from './component/product';
import { useProduct } from './hooks/products';
import { IProduct } from './modelss';


const App = () => {
  const {products, addProduct} = useProduct()
  const [modal, setModal] = useState(true)

  const createHendler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }
  
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {products.map(product =><Product product={product} key={product.id}/>)}
      {modal && <Modal title='create product'>
        <CreateProdect onCreate={createHendler}/>
      </Modal>}
    </div>

  );
}

export default App;
