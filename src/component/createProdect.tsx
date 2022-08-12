import React, { useState } from 'react';
import { Input } from './UI/input';

import { IProduct } from '../modelss'
import axios from 'axios';

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: '',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate:4.1,
    count:259
  }
}


interface createrProductProps {
  onCreate: (product: IProduct) => void
}

export function CreateProdect({ onCreate }: createrProductProps) {

  const [value, setValue] = useState('')
  const [descr, setDescr] = useState('')

  const submitHendler = async (e: React.FormEvent) => {
    e.preventDefault()

    productData.title = value
    productData.description = descr

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

    onCreate(response.data)
  }

  const changeTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const changeDescr = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setDescr(e.target.value)
  }

  return (
    <form onSubmit={submitHendler}>
      <Input 
        type="text" 
        className='border  py-2 px-4 mb-2 w-full'
        onChange={changeTitle}
        placeholder='title'
        valuer={value}
        />
      <Input 
        type="text" 
        className='border  py-2 px-4 mb-2 w-full'
        onChange={changeDescr}
        placeholder='description'
        valuer={value}
        />
      <button type='submit' className='bordert py-2 px-4 mb-2 bg-yellow-400'>create</button>
    </form>
  );
}
