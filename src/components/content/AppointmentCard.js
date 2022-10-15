import React from 'react';
import { useLocation } from 'react-router-dom';

import AppointmentNav from './AppointmentNav';
import AppointmentContent from './AppointmentContent';
import Map from './Map';
import '../../style/appointment-card.css';
import { routes } from '../../globalConst';

const AppointmentCard = () => {
    const location = useLocation();
    const getComp =()=>{
        let comp=null
        if(location.pathname!=routes.main){
            if(window.innerWidth<=1000){
                comp = <Map/>
            }   
        }
        return comp;
    }
    return(
        <div id="Appointment-card" className="d-flex w-100">
            <div className="d-flex flex-column col-5">
                <AppointmentNav/>
                {
                    location.pathname != routes.main?
                    <AppointmentContent />
                    :
                    null
                }
            </div>
            {
                getComp()
            }
        </div>
    )
}

export default AppointmentCard;