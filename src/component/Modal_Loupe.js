
import React, {useState, useEffect}  from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./Modal_Loupe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {

    console.log(props);

        const [show, setShow] = useState(false);
    

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);





    return (
        <div className="parent">


            <Button className="first" onClick={handleShow}>
                <FontAwesomeIcon icon={faSearch} />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modalHeader" >
                    <Modal.Title>{props.dataEntre.Entree[0].nom} : </Modal.Title>
                </Modal.Header>

                <div className="body d-flex">
                    <div className="image">
                    <img src="./img/entre/entre(0).jpg" alt="" style={ {height: `50vh`,width: `50vh` }}/>
                    </div>

                    <div className="texte">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dicta, officiis eveniet magnam ipsa ullam dignissimos.
                        </p>
                        <span>
                            {props.dataEntre.Entree[0].prix} $
                        </span>


                    </div>
                </div>


                <Modal.Footer className="modalFooter">
                    <Button className="btnModal"  onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="btnModal"  onClick={handleClose}>
                        Panier
                     </Button>
                </Modal.Footer>
            </Modal>


        </div>
    )

}




export default Header;  