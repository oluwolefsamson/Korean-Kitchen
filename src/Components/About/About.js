import React from 'react'
import './About.css'
import { Button } from '@mui/material'

const About = () => {
  return (
    <section className='a-container'>
        <div className='both-side2'>

            {/* left-side */}
            <div className='left-side2'>
                <img src='/about-img.png' alt='about-img' />
            </div>

            {/* right side */}
            <div className='right-side2'>
                <span>ABOUT</span>
                <span>Tteokbokki</span>
                <span>Tteokbokki, a Korean street food sensation, 
                  features chewy rice cakes immersed in a fiery red 
                  sauce. Central to its flavor is gochujang, a fermented
                   chili paste lending delightful spiciness. A sauté of 
                   garlic, gochujang, soy sauce, and a hint of sugar creates
                    a rich sauce, enveloping the rice cakes as they cook to
                     tenderness. Variations may include fish cakes or hard-boiled
                      eggs for extra flair. The result is a perfect harmony of
                       spicy and sweet, making Tteokbokki a must-try for those
                        craving bold and authentic Korean flavors on the go.
                         Its global popularity lies in the artful balance of
                          textures and flavors, offering a quick and delightful
                           taste of Korean street food culture. Bite into Tteokbokki,
                            and you'll experience the magic of chewy, fiery goodness—a
                             dish that captures the essence of Korean culinary ingenuity
                              in every bite.</span>
                             <span><Button variant="outlined" color='error' >VIEW OUR MENU</Button></span>

            </div>

        </div>

    </section>
  )
}

export default About