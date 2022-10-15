import React from 'react';
import { useLocation } from 'react-router-dom';

import AppointmentNav from './AppointmentNav';
import AppointmentContent from './AppointmentContent';
import Map from './Map';
import '../../style/appointment-card.css';
import { routes } from '../../globalConst';

const AppointmentCard = () => {
    const location = useLocation();
    const [navStatus, changeNavStatus]=React.useState(window.innerWidth <= 1000? true : false);

    window.onresize=()=>{
        changeNavStatus(window.innerWidth <= 1000? true : false);
        if (window.innerWidth > 1000){
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
    };

    return(
        <div id="Appointment-card" className="d-flex w-100">
            <div className="d-flex flex-column col-5">
                <AppointmentNav nav_status={ navStatus } />
                {
                    !navStatus || (navStatus && location.pathname != routes.main)?
                    <AppointmentContent current_location={ location.pathname } />
                    :
                    null
                }
            </div>
            {
                !navStatus || location.pathname == routes.main?
                <Map />
                :
                null
            }
        </div>
    )
}

export default AppointmentCard;