import React from 'react';
import { HeaderMain } from './style';
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <HeaderMain>
      <img src={logo} alt="logo" id="logo" />
      <div>
          <ul>
            <li><a href="https://www.facebook.com/rodolfoalvesg" target="blank"><img src={facebook} alt="facebook"/></a></li>
            <li><a href="https://www.instagram.com/rodolfo.alvesg" target="blank"><img src={instagram} alt="instagram"/></a></li>  
            <li><a href="https://www.linkedin.com/in/rodolfoalvesg" target="blank"><img src={linkedin} alt="linkedin"/></a></li>
          </ul>   

          <a href="https://drive.google.com/file/d/1thPWrghiZkL_hMUwk2vIQbqKJT43js9T/view?usp=sharing" target="blank" className="btn-cv">DOWNLOAD CV</a>
      </div>
    </HeaderMain>
  )
}

export default Header;