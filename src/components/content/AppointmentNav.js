import React from 'react'

import useButtonsPane from '../../hooks/useButttonsPane';
import { paneTemplates } from '../../globalConst';

function AppointmentNav() {
    const [navStatus,changeNavStatus]=React.useState(false);
    const getPane = useButtonsPane();

    window.onresize=()=>{
        changeNavStatus(window.innerWidth <= 1000? true : false);
    };

    return(
      <div id='AppointmentNav' className='d-flex flex-row justify-content-around mt-3'>
        {
          getPane(navStatus? paneTemplates.navigation_mobile : paneTemplates.navigation)
        }
      </div>
    )
}

export default AppointmentNav