import React from 'react'
import { useLocation } from 'react-router-dom'

import { routes } from '../../globalConst'
import HistoryListItem from './HistoryListItem.js' 
const AppointmentContent = () => {
    const location = useLocation();
    const generator=()=>{
        const items =[];
        for(let i=0;i<100;i++){
            items.push(<HistoryListItem itemprops={{
                dateTime:"19.02.2020\n12.09.2022",
                trasport:"nissan GTR",
                workType:"Drag Racing",
                fullname:"Зубенко Михаил Петрович"
            }}/>)
        }
    }
    return(
        <div id="Appointment-content" className="mt-4 d-flex flex-column">
            {
                location.pathname==routes.history? 
                    generator():null
            }
        </div>
    )
}

export default AppointmentContent