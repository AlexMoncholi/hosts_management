import DataLoader from './DataLoader';
import { setEvents } from './components/header';
import { paintCards } from './helpers/paint';

function init() {
  // Load the data into a var
  const data = new DataLoader();
  const newData = data.createOrderedArray();

  paintCards(newData);
  setEvents(newData);

}
init();
