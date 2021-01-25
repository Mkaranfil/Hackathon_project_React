import React, { Component } from 'react'
import { Form, FormGroup } from 'react-bootstrap';
import '../css/formulaire.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
export default class Formulaire extends Component {

    closeForm = () => {
        console.log("close");
        document.querySelector('#formsPanel').classList.toggle("formsOff");
    }

    render() {
        return (
            <div className="p-5 forms d-flex formsOff" id="formsPanel">
                <div className="iclose">
                <button onClick={this.closeForm} className="closedForm"><FontAwesomeIcon icon={faWindowClose} /></button>
                </div>
                <div className='mr-5 divA'>
                    <Form>
                        <div className="my-5">
                        <h1>Connexion</h1>
                        <h3>déjà membre chez nous ?</h3>
                        </div>
                        <Form.Row>
                            <Form.Group className="">
                                <Form.Label>Utilisateur/E-mail</Form.Label>
                                <Form.Control type="lastName" placeholder="Utilisateur/E-mail" />
                            </Form.Group>
                            <Form.Group className="">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="Password" placeholder="Mot de passe" />
                            </Form.Group>

                        </Form.Row>
                        <a href="">Mot de passe oublié</a>

                    </Form>
                </div>
                <div className='mx-5'>
                    <Form>
                        <div className="my-5">
                            <h1>S'inscrire</h1>
                            <h3>Voulez vous inscrire gratuitement ?</h3>
                        </div>
                        <Form.Row>
                            {/* formulaire d'inscription */}
                            <Form.Group className="caseForms">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="lastName" placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group className="">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="Password" placeholder="Mot de passe" />
                            </Form.Group>
                        </Form.Row>


                        <Form.Row>
                            <Form.Group className="caseForms">
                                <Form.Label>Nom:</Form.Label>
                                <Form.Control type="Name" placeholder="Nom" />
                            </Form.Group>
                            <Form.Group className="">
                                <Form.Label>Prenom:</Form.Label>
                                <Form.Control type="lastName" placeholder="Prenom" />
                            </Form.Group>
                        </Form.Row>


                        <Form.Row>
                            <Form.Group className="caseForms">
                                <Form.Label>Adresse:</Form.Label>
                                <Form.Control type="Adresse" placeholder="Adresse" />
                            </Form.Group>
                            <Form.Group className="">
                                <Form.Label>Commune</Form.Label>
                                <Form.Control type="lastName" placeholder="1000" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>

                            <Form.Group controlId="formGridState">
                                <Form.Label>Choix du paiement</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choix du paiement</option>
                                    <option>Cash</option>
                                    <option>Paypal</option>
                                    <option>Visa/Master Card</option>
                                    <option>Carte bancaire</option>
                                </Form.Control>

                            <Button as="input" type="submit" value="Envoyer" className="my-3" />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </div>
            </div>
        )
    }
}
