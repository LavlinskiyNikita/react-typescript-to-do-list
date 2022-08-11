import { useState } from "react";
import { IProduct } from "../modelss";

interface productAS {
  product: IProduct
}

export function Product({ product}: productAS) {

  const [dirales, setDitalis]  = useState(false)
  console.log(product);
  
  return (
    <div className="border py-2 px-4 rounded  flex flex-col items-center mb-2">
      <img className="w-1/5" src={product.image} alt={product.title}/>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button 
        className="py-2 px-4 border bg-yellow-400"
        onClick={() => setDitalis(!dirales)}
        >{dirales ? 'hide' : 'more'}</button>
        { dirales && <div className="">
          <p>{product.description}</p>
          <p className="py-7">{product.category}</p>
          <strong className="py-7">{product.rating.rate}</strong>
        </div>}
    </div>
  )
}