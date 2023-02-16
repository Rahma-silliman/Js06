// Écrire une fonction qui génère et retourne un nombre aléatoire entre 1 et 10 
function randomNumber(){

var random = Math.floor((Math.random()*10) + 1); 
return random;
};
console.log(randomNumber());
module.exports = randomNumber;
