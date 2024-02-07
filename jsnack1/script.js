// Snack 1:
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parola1 = prompt("Inserisci una parola");
const parola2 = prompt("Inserisci un altra parola");

const resultElement = document.querySelector("#stampa");


if (parola1.length < parola2.length) {

    resultElement.innerText = `La parola ${parola1} e' piu' corta`;

} else if (parola1.length > parola2.length) {

    resultElement.innerText = `La parola ${parola2} e' piu' corta`;

} else {

    resultElement.innerText = `Le parole ${parola1} e ${parola2} hanno la stessa lunghezza`;

}