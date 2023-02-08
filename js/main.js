// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero
//da 1 a 5. Generiamo un numero random (sempre da 1 a 5) 
//per il computer (usando una funzione). Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari 
// (usando una funzione) Dichiariamo chi ha vinto.
// Se l’utente ha scritto “pari” e la somma è pari, 
// ha vinto l’utente Se l’utente ha scritto “pari” e la 
// somma è dispari, ha vinto il pc

//chiediamo di scrivere pari o dispari
let pariDispari = prompt ("scegli scrivendo pari o dispari");
// controlliamo che sia pari o dispari
if (pariDispari === "pari" || pariDispari === "dispari") {
    console.log(`la tua scelta é stata salvata ed é ${pariDispari} `);
} else if ( pariDispari !== "pari" || pariDispari !== "dispari") {
    
   alert("l'inserimento é errato ricarica la pagina");
}

let numeroUtente = prompt("inserisci un numero da 1 a 5");


numeroUtente = parseInt(numeroUtente);



//controlliamo che l'utente abbia inserito dei numeri validi
if (numeroUtente <= 0){
    alert("ricarica la pagina ed inserisci un numero che va da 1 a 5");
} else if (numeroUtente > 5) {
    alert ("ricarica la pagina ed inserisci un numero che va da 1 a 5");
} else {
    console.log("il numero scelto é", numeroUtente );
}
//generiamo un numero random da 1 a 5
const numberRandom = Math.round(Math.random()* 6);
console.log(numberRandom);

function getPariDispari (numeroUtente , numberRandom) {

    let numeroFinale = numeroUtente + numberRandom;
    return numeroFinale
}

// una funzione che prende il risultato e ti restituisce
// sotto forma di stringa se è "pari" o "dispari"


//  per far uscire numero finale devo creare un altra variabile
// prendendo il nome della funzione ( valore 1 , valore 2 )

const risultato = getPariDispari(numeroUtente, numberRandom);
console.log("risultato " ,risultato);

if (risultato % 2 === 0) {
    let pari = "pari";
    if (pari === pariDispari){
        console.log("pari ha vinto l'utente");
    } else {
        console.log( "ha vinto il PC");
    }
} else {
    let dispari = "dispari"
    if (dispari === pariDispari){
        console.log( "dispari ha vinto l'utente");
    } else {
        console.log( "ha vinto il pc");
    }
}



//chiediamo di inserire un numero

     
// // let utentePariDispari = parseInt (pariDispari);
// // console.log(pariDispari);
// // //chiediamo all'utente di inserire un numero da 1 a 5

// // const utente = prompt("inserisci un numero da min 1 a max 5");

// // let sbagliato = prompt("inserisci un numero valido");
// // //se il numero utente é maggiore di 5 ripeto il prompt

 




// console.log(utente);
