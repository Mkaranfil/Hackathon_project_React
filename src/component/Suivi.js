import React, { Component } from 'react'
import './Suivi.css';



class Suivi extends Component {

    render() {
        return (
            <div className="Suivi">

                <div className="SuiviFixed">

                    <h1>Compose ton MENU</h1>

                    <h3 className='menuEntree'>1. ENTREE</h3>
                    <h3 className='menuPlat'>2. PLAT</h3>
                    <h3 className='menuDessert'>3. DESSERT</h3>


                </div>


            </div>
        )
    }
}

export default Suivi;
