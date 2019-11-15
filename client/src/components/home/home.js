import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className="home">
          <Navbar />
          <div className="main">
            <Gallery />
          </div>
          <Footer />
        </div>
    );
  }
}

export default Home;
