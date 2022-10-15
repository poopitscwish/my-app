import React from "react";
import {Switch, Route } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import ContentWrap from './content/ContentWrap';
import '../style/body.css';
import '../style/media.css';
import { routes } from "../globalConst";

const App =()=>{
    return (
        <div id='App' className="d-flex flex-column">
            <Navbar />
            <Switch>
                <Route exact path={ routes.main } render={ ContentWrap } />
                <Route exact path={ routes.history } render={ ContentWrap } />
                <Route exact path={ routes.create } render={ ContentWrap } />
            </Switch>
        </div>
    )
}

export default App;