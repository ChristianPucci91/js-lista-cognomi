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

// utiliziamo un contatore e lo settiamo a 0, quando il contatore parte da 0 si incrementerà,
// traversando la lista array
var i = 0;

// creiamo una variabile nuovaListaCognomi da utilizzare per stampare ogni singolo <li>
var nuovaListaCognomi = "";

// inizio ciclo while ( condizioni : finchè contatore "i" è minore della length del nostro array)

while (i < cognomi.length) {

    console.log("contatore ",i);
    // variabile listaCognomi sarà uguale all'attuale "cognomi.length"
    // per il valore del contatore attuale.
    listaCognomi = cognomi[i];
    console.log("cognome attuale",listaCognomi);
    // variabile nuovaListaCognomi sarà uguale alla lista dei cognomi che si
    // aggiungono ad ogni ciclo + il cognome dell'attuale ciclo/contatore che
    // si andrà ad aggiungere come una lista <li> alla lista dei cognomi già
    // inseriti.
    nuovaListaCognomi = nuovaListaCognomi + "<li>" + listaCognomi + "</li>";
    console.log("lista cognomi in li:", nuovaListaCognomi);

    // stampiamo la nuova lista aggiornata fino ad avere una lista completa
    document.getElementById('stampa').innerHTML = nuovaListaCognomi;
    // incremento contatore
  i++;
}
// fine ciclo while

// scrivi anche la posizione “umana” della lista in cui il nuovo utente si trova

// Andiamo a creare una variabile chiedendo all'array quale posizione ha il nostro push
// e siccome parte da 0 aggiungiamo un +1,così l'utente vedrà visivamente a che posizione
// corrisponde il suo cognome
var posizioneCognome = cognomi.indexOf(cognomeUtente) +1;
console.log(posizioneCognome);

document.getElementById("posizione-utente").innerHTML = "La posizione del tuo cognome nella lista è : " + posizioneCognome;
