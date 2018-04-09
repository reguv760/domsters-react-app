import React from 'react';
// import bgImage from './images/background.gif';

import Header from './modules/header';
import Navigation from './modules/navigation';

import './App.css';
import './css/fonts.css';
import './css/colors.css';
import './css/typography.css';

class App extends React.Component {
  render() {
    return (

      //react uses one main div

    <div id="content" >

      <Header />
      <Navigation />
      <h1>Welcome</h1>
      <p id="intro">Welcome to the official website of Jay Skript and the Domsters. Here, you can <a href="about.html">learn more about the band</a>, view <a href="photos.html">photos of the band</a>, find out about <a href="live.html">tour dates</a> and <a href="contact.html">get in touch with the band</a>.</p>
    </div>
    );
  }
}

export default App;
