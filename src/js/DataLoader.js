"use strict";
import dataJSON from '../host-app-data.json';
import Host from './components/Host';
import App from './components/App';

/**
  Example of an app from the json
**/

const dataJSON2 = () => {
  return new Promise(function(resolve){
      resolve(dataJSON);
    });
}

const exampleData = [
  {
    "name": "Small Fresh Pants - Kautzer - Boyer, and Sons",
    "contributors": [
      "Edwin Reinger","Ofelia Dickens","Hilbert Cole","Helen Kuphal","Maurine McDermott Sr."
    ],
    "version": 7,
    "apdex": 68,
    "host": [
      "7e6272f7-098e.dakota.biz","9a450527-cdd9.kareem.info","e7bf58af-f0be.dallas.biz"
    ]
  }
];

export default class DataLoader {
    constructor() {
      this.dataJSON = dataJSON2;
      this.dataObject = [];
      this.auxHostsArray = [];
    }

    /**
      Search if the name exists on the guide list
      @list {string} - Host's name
      return boolean
    **/
    hostExists(host) {
      return (this.auxHostsArray).includes(host);
    }

    /**
      General function that adds the app to the list of its hosts
      @app {object} - App's data
      @hostIndex {integer} - Host's index
    **/
    addAppToHost(app, hostIndex) {
      const hostPosition = (this.auxHostsArray).indexOf(app.host[hostIndex]);
      const appList = this.dataObject[hostPosition];
      let newApp = new App(app);
      newApp.__proto__.constructor.addAppToList(newApp, appList);
      appList.__proto__.orderAppsListByApdex(appList);
    }

    /**
      Adds the host to the guide list
      @app {object} - App's data
      @hostIndex {integer} - Host's index
    **/
    createHostInLists(app, hostIndex) {
      let newHost = new Host(app.host[hostIndex]);
      (this.dataObject).push(newHost); // we update the guide list
      (this.auxHostsArray).push(app.host[hostIndex]); // we update the hosts list
    }

    /**
      Creates an Array with the new structure
      return object
    **/
    createOrderedArray() {
      const that = this;
      var temp = 0;
      this.dataJSON.forEach(function(element, index){ // we iterate the JSON
        for(let index in element.host) {
          if(!that.hostExists(element.host[index])) { // Search if the host exists
            that.createHostInLists(element, index); // if not, we add it to the guide list
          }
          that.addAppToHost(element, index); // else we add the app to its app list
        }
      })

      return this.dataObject;
    }
}
