import React from 'react'
import Slider from '../../components/hero/Slider'
import Order from '../../components/hero/Order'
import Category from '../../components/category/Category'
import Product from '../../components/product/Product'
const Home = () => {
    
  return (
    <div>
      <Slider/>
      <Order/>
      <Category/>
      <Product/>
    </div>
  )
}

export default Home
