// Snack 3:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.
// Stampa a schermo il contenuto dell'array.


const arrayVuoto = [];

const risultatoElement = document.querySelector("#risultato")

for (let i = 0; i < 6; i++) {

    const number = Number(prompt("Inserisci un numero"));

    if (number % 2 != 0) {

        arrayVuoto.push(number);

    }

    risultatoElement.innerText = `Numeri dispari:` + arrayVuoto;

}

// console.log (arrayVuoto);