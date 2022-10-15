import React from 'react';
import { useLocation } from 'react-router-dom';

import AppointmentNav from './AppointmentNav';
import AppointmentContent from './AppointmentContent';
import Map from './Map';
import '../../style/appointment-card.css';
import { routes } from '../../globalConst';

const AppointmentCard = () => {
    const location = useLocation();

    return(
        <div id="Appointment-card" className="d-flex w-100">
            <div className="d-flex flex-column col-5">
                <AppointmentNav/>
                <AppointmentContent />
            </div>
            {
                window.innerWidth > 1000 || location.pathname == routes.main?
                <Map />
                :
                null
            }
        </div>
    )
}

export default AppointmentCard;