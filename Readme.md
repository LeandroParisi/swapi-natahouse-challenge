<h1 align="center">StarWars travel Calculator</h1>
<h2 align="center">A project built for Nata House selection process</h2>
<hr />

## Abstract:
An application which given a travel distance in MGTLs, calculates necessary stops for many star wars spaceships using SWAPI Api.

<hr />

## Project Screen Shot(s)

<img src="https://github.com/LeandroParisi/swapi-natahouse-challenge/blob/main/demonstration/StarWars_calculator_demonstration.gif?raw=true" alt="App demonstration" width="1100px" >

<hr />

## Installation and Setup Instructions 

1. Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

2. Installation:

    `npm install`  

3. To Run Test Suite (if any):  

    `npm test`  

4. To Start Server:

    `npm start`  

5. To Visit App:

    `localhost:3000/ideas`  

<hr />

## TimeLog:

### Mandatory 1:
1. Understand the problema and API documentation: 20min;
2. Create fetch function (src/services/fetchStarships.js): 23min;
3. travelCalculation helper (src/helpers/travelCalculation.js): 25min;
4. User input Form (src/pages/TravelCalculator.js lines: 40 - 50 and componentDidMount): 10min;
5. Ships display (src/components/StarshipsDisplay.js and calculateTravel function): 5min

#### Total time spent: 1h23min

<hr />

### Bonus 1:
1. Download and import starship images: 15min;
2. Styling: 60min

#### Total time spent: 1h15min

<hr />

### Bonus 2:
1. Input error message: 10min;
2. Tests: 60min
3. Refactoring: travelCalculationSwitch with regex: 15min

#### Total time spent: 1h25min

<hr />

#### Total time spent (entire project): 4h03min

