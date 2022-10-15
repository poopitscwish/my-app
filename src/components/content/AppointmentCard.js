import React from 'react';

import AppointmentNav from './AppointmentNav';
import AppointmentContent from './AppointmentContent';
import Map from './Map';
import '../../style/appointment-card.css';

const AppointmentCard = () => {
    return(
        <div id="Appointment-card" className="d-flex w-100">
            <div className="d-flex flex-column col-5">
                <AppointmentNav/>
                <AppointmentContent />
            </div>
            <Map />
        </div>
    )
}

export default AppointmentCard;