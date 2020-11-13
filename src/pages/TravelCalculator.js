import React from 'react';
import fetchStarships from '../services/fetchStarships';
import travelCalculation from '../helpers/travelCalculation';
import AWing from '../images/A-Wing.jpeg';
import shipsImages from '../data/shipsImages';

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
    const API_RESPONSE = await fetchStarships();
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
        <header>
          <h1>StarWars travel calculator</h1>
        </header>

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
              <span>{`Ship: ${ship.name}`}</span>
              <span>{`Necessary Stops: ${ship.stops}`}</span>
            </div>
          ))
          : null
        }
      </main>
      </div>
    )
  }
}

export default TravelCalculator;