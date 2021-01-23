import React, { Component } from 'react'
import bars from'../ico/bars-solid.svg'
import panier from'../ico/shopping-cart-solid.svg'
import '../css/header.css'
import Panier from './Panier';
export default class Header extends Component {
    panier=()=>{
        document.querySelector('#panier').classList.toggle("panierOff");
        document.querySelector('.close').style.pointerEvents = 'auto';
    }
    render() {
        return (
            <header>
                <Panier></Panier>
                <a href="" className="meet"><p>MEET&EAT.com</p></a>
                <input type="text" name="" id=""/>
                <div>
                    <button onClick={this.panier}id="monPanier"className="butStyle"><img src={panier} alt=""/></button> 
                    <button className="butStyle"><img src={bars} alt=""/></button>
                </div>
            </header>
        )
    }
}
