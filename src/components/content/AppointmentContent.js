import React from 'react'
import { Switch, Route } from 'react-router-dom';

import { routes } from '../../globalConst'

const AppointmentContent = () => {
    return(
        <div id="Appointment-content" className="mt-4">
            <Switch>
                <Route path={ routes.create }>

                </Route>
                <Route path={ routes.history }>
                    
                </Route>
                <Route path={ routes.main }>

                </Route>
            </Switch>
        </div>
    )
}

export default AppointmentContent