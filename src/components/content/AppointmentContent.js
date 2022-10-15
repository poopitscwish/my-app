import React from 'react'
import { Switch, Route } from 'react-router-dom';

import { routes } from '../../globalConst'

const AppointmentContent = () => {
    return(
        <div id="Appointment-content" className="mt-4">
            <Switch>
                <Route exact path={ routes.create } />
                <Route exact path={ routes.history } />
                <Route exact path={ routes.main } />
            </Switch>
        </div>
    )
}

export default AppointmentContent