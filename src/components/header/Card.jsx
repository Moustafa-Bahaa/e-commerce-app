import React, { useState } from 'react'
import {  AiOutlineClose } from 'react-icons/ai'
import { BiShoppingBag } from "react-icons/bi"
import { product } from "../../assets/data/data"
import CartItems from './CartItems'
import { useSelector } from 'react-redux'

const Card = () => {

  const [cardOpen, setCardOpen] = useState(false)

  const closeCard = () => {
    setCardOpen(null)
  }

  const cartItems = useSelector((state) =>state.cart.itemsList)
  const quantity = useSelector((state) =>state.cart.totalQuantity)

let total = 0 ;
const itemLists = useSelector((state)=>state.cart.itemsList)
itemLists.forEach((item)=>{
  total +=item.totalPrice
})

  return (
    <div>
     <div className="card" onClick={()=>setCardOpen(!cardOpen)}>
      <BiShoppingBag className='cardIcon'/>
      <span className='flexCenter'>{quantity}</span>
     </div>
     <div className={cardOpen?"overlay" : "noneoverlay"}></div>
     <div className={cardOpen ? "cartItem" : "cardhide"}>
      <div className="title flex">
        <h2>Shopping Cart</h2>
        <button onClick={closeCard}>
          <AiOutlineClose className='icon'/>
        </button>
      </div>
      {cartItems.map((item)=>(
        <CartItems id={item.id}  
        cover={item.cover} name={item.name}
         price={item.price} quantity={item.quantity}
          totalPrice={item.totalPrice}/>
      ))}
      <div className="checkOut">
        <button>
          <span className=''>proceed to checkout</span>
          <label htmlFor=''>${total}</label>
        </button>
      </div>
     </div>

    </div>
  )
}

export default Card
