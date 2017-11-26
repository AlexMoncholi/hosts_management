"use strict";

export default class App {
    constructor(app) {
        this.name = app.name;
        this.apdex = app.apdex;
        this.version = app.version;
    }

    /**
      Adds the app to its list
      @app {object} - App data
      @list {object} - list of apps in the host
    **/
    static addAppToList(app, list) {
      (list.apps).push(app);
    }

    /**
      Adds the app to its list
      @app {object} - App data
      @list {object} - list of apps in the host
    **/
    static removeAppFromList(name, list) {
        for (var i=0; i < list.apps.length; i++) {
          if (list.apps[i].name === name) {
              list.apps.splice(i, 1);
              i--;
          }
        }

        return list;
    }
}
