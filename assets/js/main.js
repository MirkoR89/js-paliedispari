// Pari e Dispari

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
/*var dispari, pari, pariDispari, userNumber, pcNumber, sum;

dispari = "dispari";
pari = "pari";
pariDispari = prompt("Scegli pari o dispari");
userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(pariDispari, userNumber);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
pcNumber = getRandomNumber (1, 5);
console.log(pcNumber);

// Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
sum = userNumber + pcNumber;
console.log(sum);

function isEven(number) {
  if(number % 2 === 0) {
    return true;
  }
}

//Dichiariamo chi ha vinto.
if ((isEven(sum)) && (pariDispari === pari)) {
    alert("User WIN! Pc LOSE.")
} else if ((isEven(sum) !== true) && (pariDispari === dispari)) {
    alert("User WIN! Pc LOSE.")
} else {
    alert("Pc WIN! User LOSE")
}*/

//Palidroma

//Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.
var userInput = prompt("Inserisci una parola");

//Ho trovato la funzione grazie ad una ricerca su stuck over flow. Non sono riuscito a trovare la funzione per conto mio.
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

var pal = palindrome(userInput);

 if (pal == true) {
   alert("La parola inserita è palindroma");
 }  else {
   alert("La parola inserita non è palindroma");
 }
