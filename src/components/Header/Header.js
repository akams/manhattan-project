import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <a href="index.html" className="logo">intensify</a>
        <nav className="right">
          <a href="#" className="button alt">Log in</a>
        </nav>
      </header>
    );
  }
}

export default Header;
