import React from 'react';

import AppointmentNav from './AppointmentNav';
import AppointmentContent from './AppointmentContent';
import '../../style/appointment-card.css';

const AppointmentCard = () => {
    return(
        <div id="Appointment-card" className="d-flex flex-column pt-2 col-5">
            <AppointmentNav/>
            <AppointmentContent />
        </div>
    )
}

export default AppointmentCard;