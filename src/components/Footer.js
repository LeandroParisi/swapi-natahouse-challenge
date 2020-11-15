import React from 'react';
import stopIcon from '../images/icons/stop_icon.png';

function Footer() {
  return (
    <footer>
      <span className="legend">
        <b>Legend:</b>
        <div className='legend-inner-container'>
          <img src={ stopIcon } className="stop-icon" width='30px' alt='Stop Icon' />
          <p>Number of necessary stops</p>
        </div>
      </span>
    </footer>
  )
}

export default Footer;