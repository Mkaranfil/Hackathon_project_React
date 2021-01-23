import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../css/formulaire.css'

export default class Formulaire extends Component {
    render() {
        return (
            <div className="p-5 forms">
                <Form>
                    <Form.Row>
                        <Form.Group className="">
                            <Form.Label>Nom:</Form.Label>
                            <Form.Control type="Name" placeholder="Nom" />
                        </Form.Group>
                        <Form.Group className="">
                            <Form.Label>Prenom:</Form.Label>
                            <Form.Control type="lastName" placeholder="Prenom" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group >
                            <Form.Label>Adresse:</Form.Label>
                            <Form.Control type="Adresse" placeholder="Adresse" />
                        </Form.Group>
                    <Form.Row>
                        <Form.Group  controlId="formGridCity">
                            <Form.Label>Commune</Form.Label>
                            <Form.Control type="lastName" placeholder="1000" />
                        </Form.Group>

                        <Form.Group  controlId="formGridState">
                            <Form.Label>Choix du paiement</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choix du paiement</option>
                                <option>Cash</option>
                                <option>Paypal</option>
                                <option>Visa/Master Card</option>
                                <option>Carte bancaire</option>


                            </Form.Control>
                        </Form.Group>

                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
