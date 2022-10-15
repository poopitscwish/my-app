import React from 'react';
import AppointmentNav from './AppointmentNav';
import AppointmentContent from './AppointmentContent';
import '../../style/appointment-card.css';

const AppointmentCard = () => {
    return(
        <div id="Appointment-card" className="d-flex flex-column pt-2 col-5">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum. */}

            <AppointmentNav/>
            {/* <AppointmentContent/> */}

        </div>
    )
}

export default AppointmentCard;