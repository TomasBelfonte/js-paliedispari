// Palidroma Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita 
// è palindroma (split, join, sort, ….)

//chiedo di inserire una parola
const parola = prompt("inserisci qualsiasi parola, ti dirò se é palindroma!!");
console.log("parola scelta" , parola);


// trasformo la parola da stringa in array e la 
// scompongo in singole lettere
let myArray = parola.split("");
console.log(myArray.length);


// capovolgo l'ordine degli elementi dell'array
myArray = myArray.reverse();
console.log(myArray);


// la trasformo di nuovo in una stringa
// unificando tutti gli elementi
myArray = myArray.join("");
console.log(myArray);


//creo la funzione con la stringa inserita dall'utente
//e quella modificata al contrario da me
function getPalindromo(parola, myArray){
    if (parola === myArray){
        return console.log("la parola é palindroma");
        
    } else {
        
        return console.log("la parola non é palindroma");
    }

    
}

let trueFalsePalindroma = getPalindromo(parola,myArray);
