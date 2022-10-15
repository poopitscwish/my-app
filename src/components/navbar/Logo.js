import React from 'react'

import appLogo from '../../pics/app-logo.svg';

function Logo() {
  return (
    <div id="Logo" className="d-flex flex-row me-auto pt-2 pb-2 ps-2 pe-3">
        <img src={ appLogo } alt="app-logo" className="w-100" />
    </div>
  )
}

export default Logo