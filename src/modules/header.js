import React from 'react';
import logo from '../images/logo.gif';

class Header extends React.Component {
  render() {
    return (
    //react uses one main div
     <div id="header">
       <img src={logo} alt="Jay Skript and the Domsters" />
     </div>
    );
  }
}


export default Header;
