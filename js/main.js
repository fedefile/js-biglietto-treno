/* Il programma dovrà chiedere all’utente
il numero di chilometri che vuole percorrere
e l’età del passeggero.
Sulla base di queste informazioni
dovrà calcolare il prezzo totale del viaggio.

Il prezzo del biglietto è definito in base ai km (0.21 € al km),
 ma va applicato uno sconto del 20% per i minorenni
 e del 40% per gli over 65. */


 // dimmi i kilometri
 // dimmi l'età
 // restituisco l'importo che spenderai per viaggiare


  // 0.21 € al km
  // -20% under 18
  // -40% over 65

var etaAnagrafica = prompt("Qual'è la tua età?")
console.log(etaAnagrafica);
var distanza = prompt("Quanti km vuoi percorrere?")
console.log(distanza)
if (etaAnagrafica > 65) {
    console.log('-40% sconto over 65');
} else if (etaAnagrafica < 18) {
    console.log('-20% sconto under 18');
} else {
    console.log('tariffa standard adulto');
}






getElementById('container').setAttribute("class","invisible")
