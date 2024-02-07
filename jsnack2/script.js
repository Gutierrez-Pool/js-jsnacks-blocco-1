// Snack 2:

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


let sum = 0

const risultatoElement = document.querySelector("#risultato")

for (let i = 0; i < 10; i++) {

    const number = Number(prompt("Inserisci un numero"));

    if (number == null || isNaN(number)) {

        alert ("Non hai inserito un numero");

    } else {

        sum += number;

    }

    risultatoElement.innerText = `Il risultato e' ${sum}`;
}

console.log (sum)