import React from 'react';
import fetchStarships from '../services/fetchStarships';
import travelCalculation from '../helpers/travelCalculation';
import shipsImages from '../data/shipsImages';
import stopIcon from '../images/icons/stop_icon.png';
import '../visual_identity/styles/4.Pages/TravelCalculator.scss';
import { Header, Footer } from '../components';

class TravelCalculator extends React.Component {
  constructor() {
    super();

    this.calculateTravel = this.calculateTravel.bind(this);

    this.state = {
      starships: [],
      starshipsStops: null,
      inputedDistance: '',
    }
  }

  async componentDidMount() {
    const API_RESPONSE = await fetchStarships()
    this.setState({ starships: API_RESPONSE })
  }

  calculateTravel() {
    const { inputedDistance, starships } = this.state;
    const starshipsStops = travelCalculation(inputedDistance, starships);

    this.setState({ starshipsStops })
  }

  render() {
    const { inputedDistance, starshipsStops } = this.state;
    return (
      <div>
        <Header />

        <section className='user-input-container'>
          <input 
            type='number' 
            placeholder='Travel distance (in MGTLs)' 
            value={ inputedDistance }
            onChange={ ({ target }) => this.setState({ inputedDistance: target.value })}
          />

          <button type='button' onClick={ this.calculateTravel }>
            Calculate necessary stops!
          </button>

        </section>
        <main className='starships-display'>
          {starshipsStops 
            ? starshipsStops.map(ship => (
              <div className='starship-container'>
                <img src={shipsImages[ship.name]} alt={ ship.name } width='100px' />
                <p>{`${ship.name}`}</p>
                <img src={ stopIcon } className="stop-icon" alt="Stop icon" width="50px" /><span>{`${ship.stops}`}</span>
              </div>
            ))
            : null
          }
        </main>

        <Footer />

      </div>
    )
  }
}

export default TravelCalculator;