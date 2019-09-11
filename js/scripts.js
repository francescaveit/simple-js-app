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
    console.log ('Test2: ' + pokemon);
    };

  function getAll() {
    return repository;
    }

  return {
    add: add,
    getAll: getAll
  };
})();

//Initialization forEach
pokemonRepository.getAll().forEach(element => {
  if (element.height > 1.9) {
    document.write('<p class="top_article">Wow - he is biggest Pokemon</p>');
  }

  //Name
  document.write('<H2><a href="">' + element.name + '</a></H2>');

  //Size
  document.write ('<p class="p__small">Size: ' + element.height);

  //Type
  document.write ('<p class="p__small">Type: ');
  element.types.forEach(arrLoopType);

  //Breaks for the space between the Pokemons
  document.write ('</p>');
  document.write ('<BR><BR>');
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
}
