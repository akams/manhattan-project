import React, { Component } from 'react';
import './style/header.css'

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <a href="/" className="logo">TEAM'UP</a>
        <nav className="right">
          <a href="/Connection" className="button alt">Se connecter</a>
          <a href="#inscrire" className="button alt">S'inscrire</a>
          <a href="#pays" className="button alt">France</a>
        </nav>
      </header>
    );
  }
}
