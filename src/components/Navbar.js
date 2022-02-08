import React from 'react';
import Logoimg from '../assets/logo.png'
import {FiExternalLink} from 'react-icons/fi'

import './Navbar.css'

const Navbar = () => {
  return (
    <header>
<nav class="navbar ">
  <div class="container-fluid">
    <a href='/' class="navbar-brand">
    Rick & Morty
    </a>
    <form class="d-flex">
      <a className='butt' href='https://www.adultswim.com/videos/rick-and-morty' target='_blank'><FiExternalLink/> </a>
    </form>
  </div>
</nav>
      </header>
  );
};

export default Navbar;
