import React, { Component } from 'react';
import './style/header.css';
import logo from '../../logo.png';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="blueBorder" />
        <div className="nav">
          <img src={logo} className="logo" alt='logo' />
          <a href="/" className="logoTitle" ><div className="blue">TEAM'</div><div className="gray">UP</div></a>
          <ul className="rightNav">
            <li><a href="/Connection" className="button alt">Se connecter</a></li>
            <li><a href="#inscrire" className="button alt">S'inscrire</a></li>
            <li><a href="#help" className="button alt">Besoin d'aide?</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
