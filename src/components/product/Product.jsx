import React from 'react'
import { product } from '../../assets/data/data'
import ProductCart from './ProductCart'
import "./product.css"

const Product = () => {
  return (
    <div>
      <section className='product'>
        <div className="container grid3">
            {product.map((item)=>(
                <ProductCart key={item.id} id={item.id} cover={item.cover} name={item.name} price={item.price} />
            ))}
        </div>
      </section>
    </div>
  )
}

export default Product
