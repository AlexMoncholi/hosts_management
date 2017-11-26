import { paintCards } from '../helpers/paint';

export let setEvents = (data) => {
  /**
    This function activates the list/grid checkbox on header
  **/
  let activateCheck = () => {
    const SHOW_AS_GRID = 'Show as an awesome grid';
    const SHOW_AS_LIST = 'Show as list';
    // Click on toggle list/grid
    document.getElementById('header-grid-list-check-input').addEventListener('click', function() {
      const appLayer = document.getElementById('app');
      const textLabel = document.getElementById('header-grid-list-check-input-text');
      const grid = appLayer.classList.contains("grid");
      appLayer.classList = '';
      grid ? appLayer.classList.add('list')  : appLayer.classList.add('grid');
      grid ? textLabel.innerHTML = SHOW_AS_GRID  : textLabel.innerHTML = SHOW_AS_LIST;
    });
  }

  /**
    This function activates the host search button
  **/
  let activateHostSearch = () => {
    document.getElementById('get-top-apps-button').addEventListener('click', function() {
      let host = document.getElementById('get-top-apps-host').value;
      data.forEach(function(element, index){
        if (element.name === host) {
          element.getTopAppsByHost(element, 25);
        }
      });

    });
  }

  /**
    This function activates the host search button
  **/
  let removeHostSearchFilter = () => {
    document.getElementById('get-top-apps-remove-filter').addEventListener('click', function() {
      document.getElementById('get-top-apps-host').value = '';
      document.getElementById('app').innerHTML = '';
      paintCards(data);
    });
  }

  /**
    This function activates the add and remove app button
  **/
  let activateAppListModify = () => {
    // This function activates the add remove button
    document.getElementById('get-top-apps-button-add').addEventListener('click', function() {
      let appName = document.getElementById('get-top-apps-name').value;
      data.forEach(function(element, index, array){
        array = element.addAppToHosts(element, appName);
      });
      paintCards(data);
    });

    // This function activates the remove button
    document.getElementById('get-top-apps-button-remove').addEventListener('click', function() {
      let appName = document.getElementById('get-top-apps-name').value;
      data.forEach(function(element, index, array){
        array = element.removeAppFromHosts(element, appName);
      });
      paintCards(data);
    });
  }


  activateCheck();
  activateHostSearch();
  removeHostSearchFilter();
  activateAppListModify();
}
