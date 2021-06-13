import './Navbar.scss';
import React, {Component} from "react";
import logo from './styles/spiral_logo.svg';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='navbar'>
        <img className='navbarlogo' src={logo} />
        <div className='navbartitle'>
          David's Blog
        </div>
        <a className='navbarblog'>
          Blog Feed
        </a>
        <a className='navbarresume' href=''>
          Resume
        </a>
        <a className='navbarcontact' href=''>
          Contact Me
        </a>
      </div>
    );
  }
}

export default Navbar;
