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

  var maggiorEta = 18;
  var anziano = 65;
  var prezzoAlKm = 0.21;
  var scontoMinorenne = 20;
  var scontoAnziano = 40;

  var km = parseInt(prompt("Quanti km devi percorrere?"));
  console.log(km);
  if (!isNan(km)) {
      var eta = parseInt(prompt("Quanti anni hai?"));
      if (!isNaN(eta)){
          var tariffaBiglietto = prezzoAlKm * km;
          console.log("Prezzo al biglietto standard: " + tariffaBiglietto.toFixed(2) + "€");
          document.getElementById('prezzo-standard').innerHTML = tariffaBiglietto.toFixed(2);
          var tariffaScontataGiovani = tariffaBiglietto * (1- scontoMinorenne/100);
          console.log("Prezzo biglietto giovani: " + tariffaScontataGiovani.toFixed(2) + "€");
          document.getElementById('prezzo-scontato').innerHTML = tariffaBiglietto.toFixed(2);
            }
        else if(eta >= anziano) {
        var tariffaScontataAnziani = tariffaBiglietto * (1 - scontoAnziano/100);
        console.log("Prezzo biglietto anziani: " + tariffaScontataAnziani.toFixed(2) + "€");
        document.getElementById('prezzo-scontato').innerHTML = tariffaBiglietto.toFixed(2);
    }
        } else {
            console.log("inserire numero");
        }
        } else {
        console.log("scrivi un numero");
        }
