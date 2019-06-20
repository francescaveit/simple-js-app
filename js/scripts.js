//Pokemon Arr - Name, Size, Type
var repository = [
  ['Bullbasur',
  0.7,
  ['Grass', 'Poison']],

  ['Charizard',
  1.7,
  ['Fire', 'Flying']],

  ['Ekans',
  2,
  ['Poison']],
];

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
}

//forEach Function for the output of the values Name, Type and Size
function arrLoop(currentArr){
  //Ask for the biggest Pokemon
  if (currentArr[1] > 1.9) {
    document.write('<p class="top_article">Wow - he is biggest Pokemon</p>');
  }

  //Name
  document.write('<H2><a href="">' + currentArr[0] + '</a></H2>');

  //Size
  document.write ('<p class="p__small">Size: ' + currentArr[1]);

  //Type
  document.write ('<p class="p__small">Type: ');
  currentArr[2].forEach(arrLoopType);

  //Breaks for the space between the Pokemons
  document.write ('</p>');
  document.write ('<BR><BR>');

}

//Initialization forEach
repository.forEach(arrLoop);
