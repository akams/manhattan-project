import React, { Component } from 'react';
import './style/connection.css';

export default class Connection extends Component {
    render() {
        return (
            <div className="Connection">
                <section id="banner">
                    <input type="text" placeholder="Email" id="ConnectionInput" />
                    <input type="password" placeholder="Mot de passe" id="ConnectionInput"/>
                    <input type="submit" value="Se connecter" id="ConnectionInput"/>
                    <a href="#1">Mot de passe oublié ?</a>
                </section>             
            </div>
        )
    }
}