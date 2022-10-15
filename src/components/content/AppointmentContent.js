import React from 'react'

import { routes } from '../../globalConst'
import HistoryListItem from './HistoryListItem.js' 
import MakeAppointmentForm from './MakeAppointmentForm'

const AppointmentContent = (props) => {
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
                
                dateTime:<td>{ "19.02.2020"} <br/>{"12.09.2022"}</td>,  
                transport:<td>{"nissan Gtd"}<br/>{"О888ОО/88"}</td>,  
                workType:<td>{"Drag Racing"}</td>,
                fullname:<td>{"Зубенко Михаил Петрович"}</td>
            }}/>)
        }
        return items
    }
    return(
        <div id="Appointment-content" className="mt-4 d-flex flex-column"
        style={{border:props.current_location==routes.history? '2px solid white':'none'}}>
            {
                props.current_location==routes.history? 
                <table className='mb-3'>
                    <tbody>
                        {
                            generator()
                        }
                    </tbody>
                </table>
                :
                <MakeAppointmentForm />
            }
        </div>
    )
}

export default AppointmentContent