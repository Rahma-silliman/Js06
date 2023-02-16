//Ecrivez une fonction JavaScript pour construire le modèle suivant, en utilisant une boucle for imbriquée. 
function pattern(){
  var etoile = '';
for (var i = 0;i < 5;i++){  
  for (var j = 0;j <= i; j++){     
  etoile += '*';
  }
  etoile += '\n';
  }
  console.log(etoile);
};
pattern();
module.expots = pattern;
