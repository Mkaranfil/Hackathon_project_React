import React, { Component } from 'react';
import '../css/panier.css';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';

export default class Panier extends Component {
    closed = () => {
        document.querySelector('#panier').classList.toggle("panierOff");
        document.querySelector('.close').style.pointerEvents = 'none';
    }
    buy = ()=> {
        document.querySelector('#formsPanel').classList.toggle("formsOff");
    }


    render() {
        console.log(this);
        return (
            <div id="panier" className="panierOff ">
                <div className="d-flex justify-content-between">
                    <h1 className=" m-4">Panier</h1>
                    <button onClick={this.closed} className="close m-4"><FontAwesomeIcon icon={faWindowClose} /></button>
                </div>

                <div className="contenu">
                  <h1>
                    {this.props.monPanNom}
                  </h1>
                </div>

                <div>
                    <button onClick={this.buy} className="paiement">Paiement</button>
                </div>
            </div>
        )
    }
}
