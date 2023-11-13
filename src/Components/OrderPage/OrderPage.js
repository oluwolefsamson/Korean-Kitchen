import React from 'react'
import './OrderPage.css'
import {BsArrowRightCircleFill} from 'react-icons/bs'

const OrderPage = () => {
  return (
    <section className='o-container'>
      <div className='both-side4'>

        {/* left */}
        <div className='left'>
            <span>FAST AND RELIABLE DELIVERY SERVICES</span>
            <span>Welcome to Korean Kitchen, where we prioritize 
              getting your orders to you as quickly and efficiently as 
              possible. We understand the importance of timely deliveries, 
              and we strive to make your shopping experience seamless.</span>
                <div className='input'>
                <input placeholder='Order for your food' />
                <span>GET STARTED</span>
                <BsArrowRightCircleFill color='grey' cursor='pointer'/>
            </div>
            
        </div>

        {/* right */}
        <div className='right'>
            <img src='./keke.png' alt='keke' />
            <span>DELIVERY INFORMATION</span>
        </div>

      </div>
    </section>
  )
}

export default OrderPage
