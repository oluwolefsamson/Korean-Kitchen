import React from 'react'
import './OurMenu.css'
import data from '../../Utils/MenuDetails.json'

const OurMenu = () => {
  return (
    <section className='o-container'>
         {/* first-menu */}
      <div className='first-menu'>
            <span>OUR MENU</span>
            <span>Embark on a Korean street food adventure
                 with our tantalizing menu. Ignite your taste
                  buds with the fiery allure of Tteokbokki
                   Blaze and the savory-sweet sensation of
                    Kimchi Hotteok Delight. Immerse yourself
                     in the umami burst of Japchae Noodle
                      Burst and unwrap joy with Kimbap Rolls
                       Unrolled. Indulge your sweet tooth with
                        the warm embrace of Hotteok Bliss,
                         and elevate your experience with a variety
                          of flavorful Banchan Bites. Join us
                           for a culinary exploration, where each
                            dish is a delicious journey through
                             the vibrant flavors of Korea's bustling
                              streets.</span>
        </div>    
       
      
       {/* second menu */}
        <div className='second-menu'>
        {
            data.map((item, i) => (
              <div className='map-data' key={i} >
                <img src={item.image} />
                <span>{item.name}</span>
                <h3>{item.price}</h3>
               
              </div> 
            ))
           }
        </div>
      
    </section>
  )
}

export default OurMenu
