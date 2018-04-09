import React from 'react';
import '../css/navigation.css';


class Navigation extends React.Component {
  render() {
    return (
    //react uses one main div
    <div id="navigation">
     <ul>
       <li><a href="index.html">Home</a></li>
       <li><a href="about.html">About</a></li>
       <li><a href="photos.html">Photos</a></li>
       <li><a href="live.html">Live</a></li>
       <li><a href="contact.html">Contact</a></li>
     </ul>
   </div>
    );
  }
}


export default Navigation;
