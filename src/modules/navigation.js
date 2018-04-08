import React from 'react';


class Navigation extends React.Component {
  render() {
    return (
    //react uses one main div
    <div id="navigation">
     <ul>
       <li><a href="#">Home</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">Photos</a></li>
       <li><a href="#">Live</a></li>
       <li><a href="#">Contact</a></li>
     </ul>
   </div>
    );
  }
}


export default Navigation;
