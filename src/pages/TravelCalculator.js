import React from 'react';
import fetchStarships from '../services/fetchStarships';
import travelCalculation from '../helpers/travelCalculation';

class TravelCalculator extends React.Component {
  constructor() {
    super();

    this.state = {
      starships: [],
    }
  }

  async componentDidMount() {
    const API_RESPONSE = await fetchStarships();
    this.setState({ starships: API_RESPONSE })
  }

  render() {
    const { starships } = this.state;
    console.log(travelCalculation(1000000, starships))
    return (
      <div>
        <header>
          <h1>StarWars travel calculator</h1>
        </header>
      <main>
        
      </main>
      </div>
    )
  }
}

export default TravelCalculator;