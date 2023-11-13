import React from 'react'
import './Footer.css'
import {BiLogoFacebook} from 'react-icons/bi'
import {FaInstagram} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import {FaPinterestP} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='f-container'>
        <div className='both-side5'>

            {/* left */}
            <div className='left'>
                <span>41, Wausan-ro, Mapo-gu, Seoul 04049 South Korea</span>
               
            </div>

            {/* center */}
            <div className='center'>
                <span>About</span>
                <span>Support</span>
                <span>Staffs</span>
                <span>Customers</span>
            </div>

            {/* right */}
            <div className='right'>
                <span><BiLogoFacebook size={20}/></span>
                <span><FaXTwitter size={20}/></span>
                <span><FaInstagram  size={20}/></span>
                <span><FaPinterestP size={20}/></span>
                <span><AiOutlineLinkedin size={20}/></span>
            </div>

        </div>
    </section>
  )
}

export default Footer