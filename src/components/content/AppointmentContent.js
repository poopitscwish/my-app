import React from 'react'
import { useLocation } from 'react-router-dom'

import { routes } from '../../globalConst'
import HistoryListItem from './HistoryListItem.js' 
const AppointmentContent = () => {
    const location = useLocation();
    const generator=()=>{
        const items =[];
        for(let i=0;i<100;i++){
            if(i==0){
                items.push(<HistoryListItem itemprops={{
                
                    dateTime:<span>{"Начало/Конец работы"}</span>,  
                    transport:<span>{"ТС и номер"}</span>,
                    workType:<span>{"Тип работы"}</span>,
                    fullname:<span>{"ФИО ответсвенного"}</span>
                }}/>)
            }
            items.push(<HistoryListItem itemprops={{
                
                dateTime:<span>{ "19.02.2020"} <br/>{"12.09.2022"}</span>,  
                transport:<span>{"nissan GTR"}<br/>{"О888ОО/88"}</span>,  
                workType:<span>{"Drag Racing"}</span>,
                fullname:<span>{"Зубенко Михаил Петрович"}</span>
            }}/>)
        }
        return items
    }
    return(
        <div id="Appointment-content" className="mt-4 d-flex flex-column ms-auto me-auto">
            {
                location.pathname==routes.history? 
                    generator():null
            }
        </div>
    )
}

export default AppointmentContent