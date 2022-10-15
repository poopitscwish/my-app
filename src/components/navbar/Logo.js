import React from 'react'
import { useHistory } from 'react-router-dom';

import appLogo from '../../pics/app-logo.svg';
import { routes } from '../../globalConst';

function Logo() {
  const history = useHistory();

  return (
    <div id="Logo" className="d-flex flex-row col-3 p-2">
        <img src={ appLogo } alt="app-logo" className="w-50 me-auto ms-auto"  onClick={ () => history.push(routes.main) } />
    </div>
  )
}

export default Logo