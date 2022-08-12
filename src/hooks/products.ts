import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProduct } from "../modelss";

export function useProduct() {
  const [products, setProducts] = useState<IProduct[]>([])

  const addProduct = (product: IProduct) => {
    setProducts(prev => [...prev, product])
  }
 
  async function featchS() {
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=70')
    setProducts(response.data)
  }

  useEffect(() => {
    featchS()
  }, [])

  return {products, addProduct}
}