import React from 'react';

import AppointmentCard from './AppointmentCard';
import Map from './Map';

import '../../style/content-wrap.css';

const ContentWrap = () => {
    return(
        <div id="Content-wrap" className="d-flex">
            <AppointmentCard />
            <Map />
        </div>
    )
}

export default ContentWrap;