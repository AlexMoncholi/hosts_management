import Card from '../components/Cards';

export let paintCards = (data, num) => {
  let list = document.createElement('div');
  // create and store the HTML node cards elements
  data.forEach(function(element, index){
    var newCard = new Card(element, element.apps, num);
    list.appendChild(newCard.createHostCardHTML());
  });
  // clean the app DOM and fill with the cards
  var currentDiv = document.getElementById("app");
  currentDiv.innerHTML = '';
  currentDiv.appendChild(list);
}
