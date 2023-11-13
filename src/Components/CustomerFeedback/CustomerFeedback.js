import React from 'react'
import './CustomerFeedback.css'
import data from '../../Utils/Feedback.json'
import {BiSolidQuoteAltLeft} from 'react-icons/bi'

const CustomerFeedback = () => {
  return (
    <section className='c-container'>
        <div className='both-side3'>

            {/* first */}
            <div className='first'>
                <span>CUSTOMER FEEDBACK</span>
            </div>
            </div>

            {/* second */}
            <div className='second'>
                {
                    data.map((feed, f) => (
                        <div key={f} className='second-data'>
                            <span><BiSolidQuoteAltLeft size={20} /></span>
                            <span>{feed.detail}</span>
                            <img src={feed.image} alt='feedImg' />
                            <span>{feed.name}</span>
                        </div>
                    ))
                }
        </div>
    </section>
  )
}

export default CustomerFeedback