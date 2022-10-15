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
                
                    dateTime:<th className=''>{"Начало/Конец работы"}</th>,  
                    transport:<th className=''>{"ТС и номер"}</th>,
                    workType:<th className=''>{"Тип работы"}</th>,
                    fullname:<th className=''>{"ФИО ответсвенного"}</th>
                }}/>)
            }
            items.push(<HistoryListItem itemprops={{
                
                dateTime:<td className='pe-5'>{ "19.02.2020"} <br/>{"12.09.2022"}</td>,  
                transport:<td className='ps-5 pe-4'>{"nissan Gtd"}<br/>{"О888ОО/88"}</td>,  
                workType:<td className=''>{"Drag Racing"}</td>,
                fullname:<td className=''>{"Зубенко Михаил Петрович"}</td>
            }}/>)
        }
        return items
    }
    return(
        <table bordercolor="white" border="1" id="Appointment-content" className="mt-4 d-flex flex-column ms-3 me-3 p-2">
            {
                location.pathname==routes.history? 
                    generator():null
            }
        </table>
    )
}

export default AppointmentContent