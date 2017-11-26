"use strict";
import AppList from './AppList';
import App from './App';
import { paintCards } from '../helpers/paint';

export default class Host {
    constructor(name, scope) {
      this._scope = scope || document.getElementById('app');
      this.name = name;
      this.apps = new AppList;
    }

    /**
      Bubble method to sort the apps list by appdex
      @list {object} - list of apps in the host
    **/
    orderAppsListByApdex(list) {
      let newList = new AppList;
      list.apps.sort(function (a, b) {
        if (a.apdex < b.apdex) {
          return 1;
        }
        if (a.apdex > b.apdex) {
          return -1;
        }
        return 0;
      });
      newList = list;

      return newList;
    }

    /**
      Prints a n number of apps that belongs to the host
      @host {object} - Host object
      @num {integer} - Number of apps to show
    **/
    getTopAppsByHost(host, num){
      this._scope.innerHTML = '';
      paintCards([host], num);
    }

    /**
      Prints a n number of apps that belongs to the host
      @host {object} - Host object
      @name {string} - Name of the new app
    **/
    addAppToHosts(host, name){
      let newApp = {};
      newApp.name = name;
      newApp.apdex = host.apps[0].apdex;
      newApp.version = 1;
      const appToInclude = new App(newApp);
      App.addAppToList(appToInclude, host);
      this.orderAppsListByApdex(host);

      return host;
    }

    removeAppFromHosts(host, name){
      App.removeAppFromList(name, host);
      this.orderAppsListByApdex(host);

      return host;
    }
}
