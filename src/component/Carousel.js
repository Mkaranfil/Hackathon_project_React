import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import ImgCarousel1 from '../img-MEET/entre/entre (1).jpg';
import ImgCarousel2 from '../img-MEET/plats/plat (1).jpg';
import ImgCarousel3 from '../img-MEET/desert/desert (4).jpg';
import '../css/carousel.css'
export default class Carousel1 extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block imgCarousel"
                            src={ImgCarousel1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="textPres">
                            <h1>Une envie de voyager au Liban ?</h1>
                            <p>Venez deguster les saveurs venus tout droit du Moyen-Orient</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block imgCarousel"
                            src={ImgCarousel2}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="textPres">
                            <h3>Un Burger comme aux Etas-Unis peut-être ?</h3>
                            <p>Un burger avec des produits importé directement des Etats-Unis et frais.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block imgCarousel"
                            src={ImgCarousel3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="textPres">
                            <h3>Des donuts tout frais ?</h3>
                            <p>Une pate mouelleuse et tendre avec des coulis pour tout les gouts</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="d-flex my-5 mx-4">
                    <div className="p-4 mx-auto">
                        <h1>Sélection</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, asperiores! Illum perferendis nulla praesentium soluta magnam minima dolor aut expedita architecto? Obcaecati exercitationem molestiae illo cum. Non commodi at tenetur?</p>
                    </div>
                    <div className="p-4 mx-auto">
                        <h1>Paiement</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, asperiores! Illum perferendis nulla praesentium soluta magnam minima dolor aut expedita architecto? Obcaecati exercitationem molestiae illo cum. Non commodi at tenetur?</p>
                    </div>
                    <div className="p-4 mx-auto">
                        <h1>Livraison</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, asperiores! Illum perferendis nulla praesentium soluta magnam minima dolor aut expedita architecto? Obcaecati exercitationem molestiae illo cum. Non commodi at tenetur?</p>
                    </div>
                </div>
            </div>
        )
    }
}
