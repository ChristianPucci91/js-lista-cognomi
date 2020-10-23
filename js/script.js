// Esercizio Lista Cognomi

// Chiedere all’utente il cognome

cognomeUtente = prompt("Qual'è il tuo cognome? (Inseriscilo con la Maiuscola )");
console.log(cognomeUtente);

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’

cognomi = ["Bianchi","Rossi","Duzioni","Balsano","Verdi"];

// Pushiamo il cognome inserito dall'utente all'interno della nostra Array

cognomi.push(cognomeUtente);
console.log("Lista cognomi non ordinati",cognomi);

// stampiamo la lista ordinata alfabeticamente

cognomi.sort();
console.log("Lista cognomi ordinati",cognomi);


// scrivi anche la posizione “umana” della lista in cui il nuovo utente si trova

// utiliziamo un contatore e lo settiamo a 0, quando il contatore parte da 0 si incrementerà,
// traversando la lista array
var i = 0;

// inizio ciclo while ( condizioni : finchè contatore "i" è minore della length del nostro array)

while (i < cognomi.length) {

    console.log("contatore ",i);
    // variabile listaCognomi sarà uguale all'attuale "cognomi.length"
    // per il valore del contatore attuale.
    listaCognomi = cognomi[i];
    console.log("cognome attuale",listaCognomi);
    // variabile nuovaListaCognomi sarà uguale all'attuale cognome del nostro array
    // inserito in una lista <li>
    nuovaListaCognomi = "<li>" + listaCognomi + "</li>";
    console.log("lista cognomi in li:", nuovaListaCognomi);

    document.getElementById('stampa').innerHTML = nuovaListaCognomi;

  i++;
}
