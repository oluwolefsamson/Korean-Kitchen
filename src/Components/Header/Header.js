import React from 'react'
import "./Header.css"
import {GiCookingPot} from 'react-icons/gi'
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { useState } from 'react';


  const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
  
    const getMenuStyles =(menuOpened) => {
      if (document.documentElement.clientWidth <= 800)
      {
        return {right: !menuOpened && '-100%'}
      }
    }

  return (
    <section className='h-container'>
        <div className='both-side'>
             {/* left-side */}
             <div className='left-side'>
                <span>KOREAN <br /> KITCHEN</span>
                <GiCookingPot size={40} color='black'/>
             </div>

             {/* right-side */}
             <OutsideClickHandler
                onOutsideClick={()=> {
                  setMenuOpened(false)
                }}
                >
             <div className='right-side'  
             style={getMenuStyles(menuOpened)}>
                <a href='#'>HOME</a>
                <a href='#'>SALAD BOWL</a>
                <a href='#'>MENU</a>
                <a href='#'>FEEDBACK</a>
                <a href='#'>CONTACT</a>
             </div>
             </OutsideClickHandler>
             <div className="menu-icon" onClick={ () => setMenuOpened ((prev)=>!prev)}>
              <BiMenuAltRight size={35} />
              </div>

             

        </div>


    </section>
  )
}

export default Header