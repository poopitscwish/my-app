import React from "react";

import Navbar from './navbar/Navbar';
import ContentWrap from './content/ContentWrap';
import '../style/body.css';

const App =()=>{
    return (
        <div id='App' className="d-flex flex-column">
            <Navbar />
            <ContentWrap />    
        </div>
    )
}

export default App;