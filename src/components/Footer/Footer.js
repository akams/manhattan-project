import React, { Component } from 'react';
import './style/footer.css'

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <div className="inner flex flex-3">
            <div className="flex-item box">
              <div className="content">
                <h3>Notre sélection</h3>
                <ul className="footerBox">
                  <li> <a href="#1">Basic Collectif</a></li>
                  <li> <a href="#2">Détente</a></li>
                  <li> <a href="#3">Combat</a></li>
                  <li> <a href="#4">Atlétique</a></li>
                  <li> <a href="#5">Glisse</a></li>
                  <li> <a href="#6">Rudisme</a></li>
                </ul>
              </div>
            </div>
            <div className="flex-item box">
              <div className="content">
                <h3>A propos de Team'UP ?</h3>
                <ul className="footerBox">
                  <li> <a href="#7">Le concept</a></li>
                  <li> <a href="#8">Les créateurs</a></li>
                  <li> <a href="#9">Rejoignez-nous</a></li>
                  <li> <a href="#10">Aide/FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="flex-item box">
              <div className="content">
                <h3>Services proposés ?</h3>
                <ul className="footerBox">
                  <li> <a href="#11">Rechercher</a></li>
                  <li> <a href="#12">Réserver/Payer</a></li>
                  <li> <a href="#13">Ajouter/Tchatter</a></li>
                  <li> <a href="#14">Créer/Organiser</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className="footerContact" >Une question ? Besoin d'aide ? <a href="#18" >Contacter-nous</a></div>
        <ul className="actions">
          <li> <a href="#15">TEAMUP 20018</a></li>
          <li> <a href="#16">Conditions d'utilisation</a></li>
          <li> <a href="#17">Confidentialité</a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
