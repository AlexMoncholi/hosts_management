"use strict";
export default class Card {
    constructor(hostName, appList, numer_of_apps) {
      this.host = hostName;
      this.appList = appList;

      this.DATA_RELEASE_VERSION = 'data-release-version';
      this.MAX_APPS_ON_LIST = !!numer_of_apps ? numer_of_apps : 5;
    }

    /**
      Returns the HTMLElement nodes to print on DOM
      return {HTMLElement} Nodes with all cards
    **/
    createHostCardHTML(large) {
      const that = this;

      let container = document.createElement('article');
      container.classList.add('card');
      // Host title
      let title = document.createElement('h1');
      let newContent = document.createTextNode(this.host.name);
      title.appendChild(newContent);
      container.appendChild(title);

      // Apps list
      let counter = 0;
      let list = document.createElement('ul');
      for (let i = 0; i < this.appList.length; i++) {
        if (counter < that.MAX_APPS_ON_LIST) {
          const element = this.appList[i];

          let item = document.createElement('li');
          // apdex
          let apdex = document.createElement('span');
          let apdex_text = document.createTextNode(element.apdex);
          apdex.appendChild(apdex_text);
          apdex.classList.add('card-apdex');
          item.appendChild(apdex);
          // App name
          let itemName = document.createElement('span');
          let itemName_text = document.createTextNode(element.name);
          itemName.appendChild(itemName_text);
          itemName.classList.add('card-app-names');
          itemName.setAttribute(that.DATA_RELEASE_VERSION, element.version);
          itemName.addEventListener('click', function() {
            alert('Release version: ' + element.version);
          });
          item.appendChild(itemName);

          list.appendChild(item);
          counter++;
        }
      }
      container.appendChild(list);

      return container;
    }

}
