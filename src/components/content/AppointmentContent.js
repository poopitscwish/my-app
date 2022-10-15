import React from 'react'
import { useLocation } from 'react-router-dom'

import { routes } from '../../globalConst'
import HistoryListItem from './HistoryListItem.js' 
import MakeAppointmentForm from './MakeAppointmentForm'

const AppointmentContent = () => {
    const location = useLocation();
    const generator=()=>{
        const items =[];
        for(let i=0;i<100;i++){
            if(i==0){
                items.push(<HistoryListItem key={ `head_item_${i}` } itemprops={{
                
                    dateTime:<th>{"Начало/Конец работы"}</th>,  
                    transport:<th>{"ТС и номер"}</th>,
                    workType:<th>{"Тип работы"}</th>,
                    fullname:<th>{"ФИО ответсвенного"}</th>
                }}/>)
            }
            items.push(<HistoryListItem key={ `list_item_${i}` } itemprops={{
                
                dateTime:<td className='pe-5'>{ "19.02.2020"} <br/>{"12.09.2022"}</td>,  
                transport:<td className='ps-5 pe-4'>{"nissan Gtd"}<br/>{"О888ОО/88"}</td>,  
                workType:<td>{"Drag Racing"}</td>,
                fullname:<td>{"Зубенко Михаил Петрович"}</td>
            }}/>)
        }
        return items
    }
    return(
        <table bordercolor="white" border="1" id="Appointment-content" className="mt-4 d-flex flex-column ms-3 me-3 p-2">
            <tbody>
            {
                location.pathname==routes.history? 
                    generator():<MakeAppointmentForm />
            }
            </tbody>
        </table>
    )
}

export default AppointmentContent