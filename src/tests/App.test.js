import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { mockedFetchReturn } from './__mocks/mockedFetchReturn';

global.fetch = jest.fn().mockImplementation( () => {
  const promise = new Promise((resolve, reject) => {
    resolve({
      json: () => {
        return mockedFetchReturn
      }
    })
  })
  return promise
})

describe('1. Testing travelCalculator mounting', () => {
  test('Page should render with only header and input', () => {
    const { getByRole } = render(<App />);

    const heading1 = getByRole('heading', { level: 1 });
    expect(heading1).toBeInTheDocument();
    expect(heading1).toHaveTextContent('Travel calculator')
  })

  test('Page should make a fetch call when loaded', async () => {
    render(<App />);
    expect(fetch).toHaveBeenCalled();
  })
})

describe('2. Testing button click', () => {
  test('Should display error if input is 0 or NaN', () => {
    const { getByRole, getByText } = render(<App />);
    expect(fetch).toHaveBeenCalledTimes(1);

    const calculateButton = getByRole('button', {name: 'Calculate necessary stops!'});
    expect(calculateButton).toBeInTheDocument();

    const distanceInput = getByRole('spinbutton', {name: ''})
    expect(distanceInput).toBeInTheDocument();

    fireEvent.change(distanceInput, { target: { value: "0" } })
    fireEvent.click(calculateButton);

    expect(getByText('Input a valid travel distance')).toBeInTheDocument();
  })

  test('Should render starships display when user input a valid distance', () => {
    const { getByRole, getByText } = render(<App />);
    expect(fetch).toHaveBeenCalledTimes(1);

    const calculateButton = getByRole('button', {name: 'Calculate necessary stops!'});
    expect(calculateButton).toBeInTheDocument();

    const distanceInput = getByRole('spinbutton', {name: ''})
    expect(distanceInput).toBeInTheDocument();

    fireEvent.change(distanceInput, { target: { value: "1000000" } })
    fireEvent.click(calculateButton);

    expect(getByText('Legend:')).toBeInTheDocument();
  })
})
