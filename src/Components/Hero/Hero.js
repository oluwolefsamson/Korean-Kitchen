import React from 'react'
import './Hero.css'
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='both-side1'>

        {/* left-side */}
        <div className='left-side1'>
            <span>Bibimbap</span>
            <span>Explore the flavors of Korea with our authentic Korean kitchen
                 recipes. From the iconic Kimchi
                 to sizzling Bulgogi, our step-by-step guides and essential 
                 ingredient lists will help you master the art of Korean cuisine.
                  Whether you're a seasoned chef or a novice in the kitchen, our
                   collection of spicy, savory, and sweet dishes has something for
                    everyone. Get ready to embark on a culinary journey that will 
                    tantalize your taste buds and bring the vibrant tastes of 
                    Korea to your home.</span>
            <span><Button variant="outlined" color='error' >VIEW OUR MENU</Button></span>
        </div>

        {/* right-side */}
         <div className='right-side1'>
           <img src='/hero-img.png' alt='hero-img' />
        </div> 
      </div>

      <div className='vegetarian'>
        <span>WHAT SHOULD I EAT AS A VEGETARIAN?</span>
      </div>

       <div className='hero-button'>
        <span>CHECK THIS OUT</span>
      </div>  
      
    </section>
  )
}

export default Hero
