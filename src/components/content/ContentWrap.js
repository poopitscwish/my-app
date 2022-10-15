import React from 'react';

import AppointmentCard from './AppointmentCard';

import '../../style/content-wrap.css';

const ContentWrap = () => {
    return(
        <div id="Content-wrap" className="d-flex">
            <AppointmentCard />
        </div>
    )
}

export default ContentWrap;