import React from "react";
import {Switch, Route } from 'react-router-dom';

import '../style/media.css';
import Navbar from './navbar/Navbar';
import ContentWrap from './content/ContentWrap';
import '../style/body.css';
import { routes } from "../globalConst";

const App =()=>{
    return (
        <div id='App' className="d-flex flex-column">
            <Switch>
                <Route path={ routes.main }>
                    <Navbar />
                    <ContentWrap />    
                </Route>
            </Switch>
        </div>
    )
}

export default App;