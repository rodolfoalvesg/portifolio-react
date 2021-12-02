import React from 'react';
import { HeaderMain } from './style';
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import youtube from '../../assets/youtube.svg'
import logo from '../../assets/logo.svg'


function Header() {
  return (
    <HeaderMain>
      <img src={logo} alt="logo" id="logo" />
      <div>
          <ul>
            <li><a href="#"><img src={facebook} alt="facebook"/></a></li>
            <li><a href="#"><img src={instagram} alt="instagram"/></a></li>  
            <li><a href="#"><img src={linkedin} alt="linkedin"/></a></li>
            <li><a href="#"><img src={twitter} alt="twitter"/></a></li>
            <li><a href="#"><img src={youtube} alt="youtube"/></a></li>
          </ul>   

          <a href="#" className="btn-cv">DOWNLOAD CV</a>
      </div>
    </HeaderMain>
  )
}

export default Header;