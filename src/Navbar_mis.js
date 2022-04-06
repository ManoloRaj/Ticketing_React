import React from 'react';
import './css/App.css';

export default class Navbar_mis extends React.Component {
    render() {
        return (
            <div class="navbar_mis">
                <div class="menu_left">
                    <ul>

                        <a href="">
                            <li>Paramétrage</li>
                        </a>
                        
                        <a href="">
                            <li>Historique</li>
                        </a>

                        <a href="">
                            <li>Graphique</li>
                        </a>
                        
                    </ul>
                </div>

                <div class="menu_right">
                    <ul>
                        <a href="">
                            <li>
                                ?
                            </li>
                        </a>
                        <a href="">
                            <li>Mode Ticketing</li>
                        </a>
                        
                        
                    </ul>
                </div>
                
            </div>
        );
    }
}