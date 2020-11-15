import React from 'react';
import fetchStarships from '../services/fetchStarships';
import travelCalculation from '../helpers/travelCalculation';
import '../visual_identity/styles/4.Pages/TravelCalculator.scss';
import { Header, Footer, StarshipsDisplay } from '../components';

class TravelCalculator extends React.Component {
  constructor() {
    super();

    this.calculateTravel = this.calculateTravel.bind(this);

    this.state = {
      starships: [],
      starshipsStops: null,
      inputedDistance: '',
      inputError: '',
      inputErrorClass: '',
    }
  }

  async componentDidMount() {
    const API_RESPONSE = await fetchStarships()
    this.setState({ starships: API_RESPONSE })
  }

  calculateTravel() {
    const { inputedDistance, starships } = this.state;

    if(isNaN(parseInt(inputedDistance)) || parseInt(inputedDistance) === 0) {
      this.setState({ 
        inputError: 'Input a valid travel distance',
        inputErrorClass: 'error',
        starshipsStops: null,
      }, () => {
        setTimeout(() => {
          this.setState({
            inputError: '',
            inputErrorClass: ''
          })
        }, 4000)
      })
    } else {
      const starshipsStops = travelCalculation(inputedDistance, starships);
      this.setState({ starshipsStops })
    }
  }

  render() {
    const { inputedDistance, starshipsStops, inputError, inputErrorClass } = this.state;
    return (
      <div>
        <Header />

        <section className='user-input-container'>
          <input 
            type='number' 
            placeholder='Travel distance (in MGTLs)' 
            value={ inputedDistance }
            className={ inputErrorClass }
            onChange={ ({ target }) => this.setState({ inputedDistance: target.value })}
          />

          <button type='button' onClick={ this.calculateTravel }>
            Calculate necessary stops!
          </button>
          { inputError ? <p>{ inputError }</p> : null }

        </section>
        <main className='starships-display'>
          {starshipsStops 
            ? <StarshipsDisplay starshipsStops={ starshipsStops } />
            : null
          }
        </main>

        { starshipsStops ? <Footer /> : null }

      </div>
    )
  }
}

export default TravelCalculator;