//Pokemon Arr - Name, Size, Type
var pokemonRepository = (function (){
  var repository = [];
  /*var repository = [
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
  ];*/

  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    repository.push(pokemon);
    };

  function getAll() {
    return repository;
  };

  //Function to show the Details for the Pokemon
  function showDetails (item) {
    pokemonRepository.loadDetails(item).then(function () {
        console.log(item);   });
    //console.log(pokemon);
    //return pokemon;
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

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        //console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    //search: search,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();


var $pokemonlist = document.querySelector('.pokemonlist');


pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  console.log('test');
  pokemonRepository.getAll().forEach(function(pokemon){
    console.log(pokemon);
    //addListItem(pokemon);

    var listItem = document.createElement('li'); //Create a new Li-Element
    $pokemonlist.appendChild(listItem); //Add the Li-Element inside the Ul-Element
    pokemonRepository.addListItem(pokemon); //Call the function addListItem to add Button inside the Li
  });
});

//Initialization forEach
/*pokemonRepository.getAll().forEach(element => {
  var listItem = document.createElement('li'); //Create a new Li-Element
  $pokemonlist.appendChild(listItem); //Add the Li-Element inside the Ul-Element
  pokemonRepository.addListItem(element); //Call the function addListItem to add Button inside the Li
  }
);*/

function examplePromise(){
  var promiseToReturn = new Promise(function (resolve, reject) {
    var sum;
    setTimeout(function(){
      sum = 5 + 6;
      if(sum > 10) {
        resolve(sum);
      }else{
        reject('The promise has been rejected');
      }
    }, 2000);
  });
  return promiseToReturn;
}

fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
  console.log (response);
  return response.json(); // This returns a promise!
  }).then(function (pokemonList) {
  console.log(pokemonList); // The actual JSON response
}).catch(function () {
  // Error
});


console.log('some piece of code');
examplePromise().then(function(result){
  console.log(result);
}).catch(function(error){
  console.log(error);
});
console.log('another piece of code');

var jsonStringFromServer = '{"name":"Lisa","age":27}';
console.log(JSON.parse(jsonStringFromServer));
var lisa = JSON.parse(jsonStringFromServer);
console.log(lisa.name, lisa.age); // 'Lisa', 27

var complexObject = {
  name: 'John ist toll',
  getAge: function () {
    return 20;
  },
  note: undefined
};
console.log(JSON.stringify(complexObject)); // '{"name":"John"}'


var list = [1, "hallo wie", 3];
console.log(JSON.stringify(list)); // '[1,2,3]'
var otherList = JSON.parse('[3,4,5]'); // [3, 4, 5]
console.log (otherList);
//forEach Function for the output of the value "Type"
/*function arrLoopType(currentArr){
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
};*/
