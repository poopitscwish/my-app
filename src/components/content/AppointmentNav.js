import React from 'react'

function AppointmentNav() {
    const [navStatus,changeNavStatus]=React.useState(false);
    window.onresize=()=>{
        changeNavStatus(window.innerWidth>1000? true:false);
    };
  return (
    <div id='AppointmentNav' className='d-flex flex-row justify-content-around'>
        {
            navStatus?

            
            // <i class="fa-solid fa-note"></i>
            // <i class="fa-regular fa-note"></i>
            // <button type='button' className='me-4 p-2'>
            //     Оформить заявку
            // </button>

            // <button type='button' className='p-2'>
            //     История заявок
            // </button>
        }
    </div>
  )
}

export default AppointmentNav