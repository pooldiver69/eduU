import React, { Component } from 'react';
import Content from '../content/content';
import Navigation from '../navbar/navbar';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <Navigation />
        </header>
        <content>
          <Content />
        </content>
        <footer className='footer"'>
          {/* <Footer /> */}
        </footer>
      </div>
    );
  }
}

export default Home;
