// var repository = [
  // [name:'fanyfight', height:7, ['grass', 'poison']],
  //[name:'jika', height:7, ['grass', 'poison']],
  //[name:'yave', height:7, ['grass', 'poison']],
//];

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
]


console.log (repository[1][0]);


for (var i = 0; i < repository.length; i++) {
  if (repository[i][1] > 1.9) {
    document.write ('<p class="top_article">Wow - he is biggest Pokemon</p>');
  }

  document.write ('<H2><a href="">' + repository[i][0] + '</a></H2>');

  document.write ('<p class="p__small">Types: ');
  for (var j = 0; j < repository[i][2].length; j++) {
    if (repository[i][2][j] == 'Grass') {
      document.write (' <span class="p__small" style="color:rgb(186, 227, 166);">' + repository[i][2][j] + ',');
    }
    else if (repository[i][2][j] == 'Poison') {
      document.write (' <span class="p__small" style="color:rgb(106, 42, 106);">' + repository[i][2][j] + ',');
    }
    else if (repository[i][2][j] == 'Fire') {
      document.write (' <span class="p__small" style="color:rgb(247, 191, 151);">' + repository[i][2][j] + ',');
    }
    else if (repository[i][2][j] == 'Flying') {
      document.write (' <span class="p__small" style="color:rgb(142, 111, 235);">' + repository[i][2][j] + ',');
    }

  }
  document.write ('</p>');
  document.write ('<BR><BR>');
}
