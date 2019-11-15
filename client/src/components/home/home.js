import React, { Component } from 'react';
import Content from '../content/content';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          {/* <NavBar /> */}
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
