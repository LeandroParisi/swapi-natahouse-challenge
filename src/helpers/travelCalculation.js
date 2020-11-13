export default function travelCalculation(totalDistance, ships) {
  let result = [];
  
  ships.forEach(ship => {
    const { MGLT, consumables, name } = ship;

    const CONSUMABLE_IN_DAYS = convertConsumablesToHours(consumables);

    const stops = Math.floor(totalDistance / (MGLT * CONSUMABLE_IN_DAYS));

    const shipResult = { name, stops }

    result = [...result, shipResult];
  })

  return result
}

function convertConsumablesToHours (consumables) {
  const CONSUMABLES_SPLITTED = consumables.split(' ')
  const TIME_DURATION = CONSUMABLES_SPLITTED[0];
  const TIME_FORMAT = CONSUMABLES_SPLITTED[1];
  
  let convertedDuration = convertConsumablesSwitch(TIME_DURATION, TIME_FORMAT);

  return convertedDuration
}

function convertConsumablesSwitch(duration, format) {
  switch(format) {
    case 'year':
      return duration * 360 * 24;
    case 'years':
      return duration * 360 * 24
    case 'month':
      return duration * 30 * 24
    case 'months':
      return duration * 30 * 24
    case 'week':
      return duration * 7 * 24
    case 'weeks':
      return duration * 7 * 24
    case 'day':
      return duration * 24
    case 'days':
      return duration * 24
    default:
      return null
  }
}
