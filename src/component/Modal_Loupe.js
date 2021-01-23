
import React, {useState, useEffect}  from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./Modal_Loupe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {


        const [show, setShow] = useState(false);
    

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);





    return (
        <div className="parent">


            <Button className="first" onClick={handleShow}>
                <FontAwesomeIcon icon={faSearch} />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                     </Button>
                </Modal.Footer>
            </Modal>


        </div>
    )

}




export default Header; 