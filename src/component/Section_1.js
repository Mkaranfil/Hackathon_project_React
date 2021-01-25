import React, { Component } from 'react'
import './Section_1.css'
import Modal from "./Modal_Loupe";
// bootstrap
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import { Modal } from 'react-bootstrap';
// fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

var monPanier = 0;

class Section_1 extends Component {

    state = {
        Entree: [

            { id: 1, nom: "Entre1", prix: "4", image: "./img/entre/entre(0).jpg"},
            { id: 2, nom: "Entre2", prix: "4.5", image: "./img/entre/entre(1).jpg"},
            { id: 3, nom: "Entre3", prix: "6", image: "./img/entre/entre(2).jpg" },
            { id: 4, nom: "Entre4", prix: "4", image: "./img/entre/entre(3).jpg" },
            { id: 5, nom: "Entre5", prix: "8", image: "./img/entre/entre(4).jpg" },
            { id: 6, nom: "Entre6", prix: "4", image: "./img/entre/entre(5).jpg" },

        ]
    };

    


    // active = () => {

    //     let Entree = document.querySelector(`.menuEntree`);
    //     // let Plat = document.querySelector(`.menuPlat`);
    //     // let Dessert = document.querySelector(`.menuDessert`);


    //     Entree.classList.add('active');

    // };

    ajout = (e) =>{

        let cible = e.target;

        const Nom = (cible.parentElement.parentElement.firstChild);
        console.log(Nom.innerHTML);

        const Prix = (cible.parentElement.parentElement.childNodes[1]);
        console.log(Prix.innerHTML);

        monPanier = monPanier + Number(Prix.innerHTML);

        console.log(monPanier);
       
    }





    render() {



        return (

            <div className="Section_1 d-flex " onMouseOver={this.active} >

                <div className="d-flex flex-column">

                    <h1 style={{ color: " #F7B733", borderBottom: '1px solid  #F7B733' }}>Nos entrees:</h1>


                    <div className="brother row-12">


                        <div className="col-4 Card">

                            <Card style={{ width: '15rem', height: '29rem' }}>
                                <Card.Img variant="top" src={this.state.Entree[0].image} />
                                <Card.Body className="CardBody">
                                    <Card.Title className="cardNom">{this.state.Entree[0].nom}</Card.Title>
                                    <Card.Title className="cardPrix">{this.state.Entree[0].prix}  </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nulla, eaque nihil enim a eveniet dignissimos quisquam eum assumenda recusandae at!
                                    </Card.Text>
                                    <div className="Card_btn">
                                        <Modal dataEntre={this.state.Entree[0]} /> 
                                        <Button onClick={this.ajout}></Button>
                                    </div>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-4 Card">

                            <Card style={{ width: '15rem', height: '29rem' }}>
                                <Card.Img variant="top" src={this.state.Entree[1].image} />
                                <Card.Body className="CardBody">
                                    <Card.Title >{this.state.Entree[1].nom}</Card.Title>
                                    <Card.Title>{this.state.Entree[1].prix} </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nulla, eaque nihil enim a eveniet dignissimos quisquam eum assumenda recusandae at!
                                    </Card.Text>
                                    <div className="Card_btn">
                                        <Modal dataEntre={this.state.Entree[1]} /> 
                                        <Button onClick={this.ajout}></Button>
                                    </div>
                                </Card.Body>
                            </Card>


                        </div>
                        <div className="col-4 Card">

                            <Card style={{ width: '15rem', height: '29rem' }}>
                                <Card.Img variant="top" src={this.state.Entree[2].image} />
                                <Card.Body className="CardBody">
                                    <Card.Title>{this.state.Entree[2].nom}</Card.Title>
                                    <Card.Title>{this.state.Entree[2].prix} </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nulla, eaque nihil enim a eveniet dignissimos quisquam eum assumenda recusandae at!
                        </Card.Text>
                                    <div className="Card_btn">
                                        <Modal dataEntre={this.state.Entree[2]} /> 
                                        <Button onClick={this.ajout}></Button>
                                    </div>
                                </Card.Body>
                            </Card>

                        </div>

                    </div>

                    <div className="brother row-12">

                        <div className="col-4 Card">

                            <Card style={{ width: '15rem', height: '29rem' }} >
                                <Card.Img variant="top" src={this.state.Entree[3].image} />
                                <Card.Body className="CardBody">
                                    <Card.Title>{this.state.Entree[3].nom}</Card.Title>
                                    <Card.Title>{this.state.Entree[3].prix} </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nulla, eaque nihil enim a eveniet dignissimos quisquam eum assumenda recusandae at!
                        </Card.Text>
                                    <div className="Card_btn">
                                        <Modal dataEntre={this.state.Entree[3]} /> 
                                        <Button onClick={this.ajout}></Button>
                                    </div>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-4  Card">

                            <Card style={{ width: '15rem', height: '29rem' }}>
                                <Card.Img variant="top" src={this.state.Entree[4].image} />
                                <Card.Body className="CardBody">
                                    <Card.Title>{this.state.Entree[4].nom}</Card.Title>
                                    <Card.Title>{this.state.Entree[4].prix} </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nulla, eaque nihil enim a eveniet dignissimos quisquam eum assumenda recusandae at!
                        </Card.Text>
                                    <div className="Card_btn">
                                        <Modal dataEntre={this.state.Entree[4]} /> 
                                        <Button onClick={this.ajout}></Button>
                                    </div>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-4 Card">

                            <Card style={{ width: '15rem', height: '29rem' }} >
                                <Card.Img variant="top" src={this.state.Entree[5].image} style={{ height: `10rem` }} />
                                <Card.Body className="CardBody">
                                    <Card.Title>{this.state.Entree[5].nom}</Card.Title>
                                    <Card.Title>{this.state.Entree[5].prix} </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nulla, eaque nihil enim a eveniet dignissimos quisquam eum assumenda recusandae at!
                        </Card.Text>
                                    <div className="Card_btn">
                                        <Modal dataEntre={this.state.Entree[5]} /> 
                                        <Button onClick={this.ajout}></Button>
                                    </div>
                                </Card.Body>
                            </Card>

                        </div>

                    </div>

                </div>

               


            </div>
        )
    }
}

export default Section_1;