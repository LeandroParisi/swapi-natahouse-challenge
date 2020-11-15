import React from 'react';
import shipsImages from '../data/shipsImages';
import stopIcon from '../images/icons/stop_icon.png';

function StarshipsDisplay({ starshipsStops }) {
  return (
    starshipsStops.map(ship => (
      <div key={ ship.name } className='starship-container'>
        <img src={shipsImages[ship.name]} alt={ ship.name } width='100px' />
        <p>{`${ship.name}`}</p>
        <img src={ stopIcon } className="stop-icon" alt="Stop icon" width="50px" /><span>{`${ship.stops}`}</span>
      </div>
    ))
  )
}

export default StarshipsDisplay;