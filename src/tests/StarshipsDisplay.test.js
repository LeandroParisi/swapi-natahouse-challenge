import { render } from '@testing-library/react';
import StarshipsDisplay from '../components/StarshipsDisplay';
import travelCalculation from '../helpers/travelCalculation';
import { mockedFetchReturn } from './__mocks/mockedFetchReturn';

describe('1. Test starships displaying with correct necessary stops', () => {
  it('Should display 1 stop for corvette and 59 for X Wing for a distance of 1000000', () => {
    const inputedDistance = 1000000;
    const mockedStarshipStops = travelCalculation(inputedDistance, mockedFetchReturn);

    const { getByText } = render(<StarshipsDisplay starshipsStops={ mockedStarshipStops } />);

    const CR90 = getByText('CR90 corvette');
    const CR90Stops = getByText('1');
    expect(CR90).toBeInTheDocument()
    expect(CR90Stops).toBeInTheDocument();

    const xWing = getByText('X-wing');
    const xWingStops = getByText('59');
    expect(xWing).toBeInTheDocument()
    expect(xWingStops).toBeInTheDocument();

  })
})