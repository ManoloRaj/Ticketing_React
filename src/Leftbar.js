import React from "react";
import logo from './images/logo.jpg';
import { Link } from "react-router-dom";

export default class Leftbar extends React.Component{
    render(){
        return (
            <div className="leftbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div class="sous_menu">
                    <div className="Texte_MIS_Dev">
                        Base MIS Developpement
                    </div>
                    <div className="titre">
                        Gestion Ticketing 
                    </div>
                    <div className="menu">
                        <ul>
                            <Link to="/">
                                <li>Chart</li>
                            </Link>

                            <Link to="/tableau">
                                <li>Cloturé</li>
                            </Link>
                                
                        
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}