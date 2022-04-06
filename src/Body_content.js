import React from "react";
import Chart_historique from "./Chart_historique";
import Tableau_historique from "./Tableau_historique";
import Leftbar from "./Leftbar";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


export default class Body_content extends React.Component{
    render(){
        return (
        <div className="body_content">

            <Router>
                <Leftbar />
                <Routes>
                    <Route path="/" element={<Chart_historique />} />
                    <Route path="/tableau" element={<Tableau_historique/>}/>
                </Routes>
            </Router>
        </div>

        );
    }
}