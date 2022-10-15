import React from 'react'
import { useHistory } from 'react-router-dom';

import appLogo from '../../pics/app-logo.svg';
import { routes } from '../../globalConst';

function Logo() {
  const history = useHistory();

  return (
    <div id="Logo" className="d-flex flex-row me-auto pt-2 pb-2 ps-2 pe-3">
        <img src={ appLogo } alt="app-logo" className="w-100" onClick={ () => history.push(routes.main) } />
    </div>
  )
}

export default Logo