import React from 'react'
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs/index.esm'
import { RiInstagramFill } from "react-icons/ri/index.esm"


const Footer = () => {
  return (
    <div>
        <footer className='boxItems'>
            <div className="container flex">
                <p>All rights reserved </p>
                <div className="social">
                    <BsFacebook className="icon"/>
                    <RiInstagramFill className="icon"/>
                    <AiFillTwitterCircle className="icon"/>
                    <AiFillLinkedin className="icon"/>

                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
