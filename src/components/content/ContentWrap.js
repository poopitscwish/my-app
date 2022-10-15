import React from 'react';

import AppointmentCard from './AppointmentCard';
import Map from './Map';

const ContentWrap = () => {
    return(
        <div id="Content-wrap" className="d-flex flex-row">
            <AppointmentCard />
            <Map />
        </div>
    )
}

export default ContentWrap;