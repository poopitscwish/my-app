import React from 'react'

import useButtonsPane from '../../hooks/useButttonsPane';
import { paneTemplates } from '../../globalConst';

function AppointmentNav(props) {
    const getPane = useButtonsPane();

    return(
      <div id='AppointmentNav' className='d-flex flex-row justify-content-around mt-1'>
        {
          getPane(props.nav_status? paneTemplates.navigation_mobile : paneTemplates.navigation)
        }
      </div>
    )
}

export default AppointmentNav