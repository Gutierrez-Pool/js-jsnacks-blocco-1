// Snack 4:

// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.


const sommaElement = document.querySelector ("#risultato");

const numero = prompt("Inserisci un numero di 4 cifre");

if (numero.length != 4) {

    alert ("Non hai inserito un numero di 4 cifre");

} else {

    let sum = 0;

    for (let i = 0; i < numero.length; i++) {

        sum += Number(numero[i]);

    }   

    sommaElement.innerText = `La somma dei numeri e': ${sum}`;
}