// var repository = [
  // [name:'fanyfight', height:7, ['grass', 'poison']],
  //[name:'jika', height:7, ['grass', 'poison']],
  //[name:'yave', height:7, ['grass', 'poison']],
//];

var repository = [
  ['OMR19 steht in den Startlöchern',
  2,
  ['Webdesign', 'UX', 'UI'],
  'Nach der OMR ist vor der OMR! Jedes Jahr kommen in den Hamburger Messehallen über 40.000 Marketing-Fachleute und Tech-Experten zum OMR-Festival zusammen, Tendenz steigend. Für viele Aussteller und Branchenexperten ist dieses Event ein echtes Jahreshighlight. Kein Wunder: Neben 300 Top-Speakern wie Gary Vaynerchuk oder Casey Neistat kann man sich für über ...'],

  ['alike – Die neue visuelle Suchmaschine von OTTO',
  1,
  ['Appdesign', 'UX', 'UI', 'Corporate Design'],
  'Wer kennt das nicht: Unterwegs sieht man ein schönes Sofa oder eine tolle Lampe, die man auch gerne hätte, doch man weiß nicht, nach welchem Begriff man googlen soll. Für diese Situation hat das Unternehmen OTTO nun die App alike auf den Markt gebracht. Das Prinzip ist ganz...'],

  ['Finance Forward – Online Tech-News für die Macher von morgen',
  1,
  ['Webdesign', 'UX', 'UI', 'Corporate Design'],
  'Im Online-Marketing-Universum unseres Kunden OMR gibt es einen neuen Stern: Finance Forward, eine News-Seite für Fachartikel aus den Bereichen Fintech, Payment und Modern Marketing. Damit ergänzt OMR seine Service-Palette um einen weiteren Baustein. Die Konzeption und das Design für Finance Forward stammt von No agency. Unser Ziel: Ein...'],
]


console.log (repository[1][0]);


for (var i = 0; i < repository.length; i++) {
  if (repository[i][1] == 2) {
    document.write ('<p class="top_article">Top Article</p>');
  }

  document.write ('<H2><a href="">' + repository[i][0] + '</a></H2>');

  document.write ('<p class="p__small">Tags: ');
  for (var j = 0; j < repository[i][2].length; j++) {
    if (repository[i][2][j] == 'Webdesign') {
      document.write (' <span class="p__small" style="color:#fccae0;">' + repository[i][2][j] + ',');
    }
    else if (repository[i][2][j] == 'UX') {
      document.write (' <span class="p__small" style="color:#e7cafc;">' + repository[i][2][j] + ',');
    }
    else if (repository[i][2][j] == 'UI') {
      document.write (' <span class="p__small" style="color:#b7fffc;">' + repository[i][2][j] + ',');
    }
    else if (repository[i][2][j] == 'Appdesign') {
      document.write (' <span class="p__small" style="color:#edffb7;">' + repository[i][2][j] + ',');
    }
    else if (repository[i][2][j] == 'Corporate Design') {
      document.write (' <span class="p__small" style="color:#e7cafc;">' + repository[i][2][j] + ',');
    }

  }
  document.write ('</p>');
  document.write ('<BR><BR>');
}
