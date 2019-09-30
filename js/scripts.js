//Pokemon Arr - Name, Size, Type
var pokemonRepository = (function (){
  var repository = [
    {
      name: 'Bullbasur',
      height: 0.7,
      types: ['Grass', 'Poison']
    },
    {
      name: 'Charizard',
      height: 1.7,
      types: ['Fire', 'Flying']
    },
    {
      name: 'Arbok',
      height: 3.5,
      types: ['Gift']
    }
  ];


  function add(pokemon) {
    repository.push(pokemon);
    };

  function getAll() {
    return repository;
  };

  //Function to show the Details for the Pokemon
  function showDetails (pokemon) {
    console.log(pokemon);
    return pokemon;
  }

  //Function for adding a Button
  function addListItem (pokemon) {
    var button = document.createElement('button'); //Create a Button
    button.innerHTML = pokemon.name; //Insert a CallToAction
    button.classList.add('pokemonbutton'); //Add CSS-Class

    $pokemonlist.lastElementChild.appendChild(button); //Add the Button inside Website

    button.addEventListener ('click', function (event) {
      showDetails (pokemon); //Call the Function showDetails to show the Detail-Informations
    });
    return pokemon;
  };


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();


var $pokemonlist = document.querySelector('.pokemonlist');

//Initialization forEach
pokemonRepository.getAll().forEach(element => {
  var listItem = document.createElement('li'); //Create a new Li-Element
  $pokemonlist.appendChild(listItem); //Add the Li-Element inside the Ul-Element
  pokemonRepository.addListItem(element); //Call the function addListItem to add Button inside the Li
  }
);

//forEach Function for the output of the value "Type"
function arrLoopType(currentArr){
  if (currentArr == 'Grass') {
    document.write (' <span class="p__small" style="color:rgb(186, 227, 166);">' + currentArr + ',');
  }
  else if (currentArr == 'Poison') {
    document.write (' <span class="p__small" style="color:rgb(106, 42, 106);">' + currentArr + ',');
  }
  else if (currentArr == 'Fire') {
    document.write (' <span class="p__small" style="color:rgb(247, 191, 151);">' + currentArr + ',');
  }
  else if (currentArr == 'Flying') {
    document.write (' <span class="p__small" style="color:rgb(142, 111, 235);">' + currentArr + ',');
  }
  else if (currentArr == 'Gift') {
    document.write (' <span class="p__small" style="color:rgb(255, 0, 0);">' + currentArr + ',');
  }
};
