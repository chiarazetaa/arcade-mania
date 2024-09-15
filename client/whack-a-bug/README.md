# whack a bug

Inizializzo la variabili per il punteggio e per il timer da esporre.
Inizializzo la velocità iniziale di comparsa del bug.

Setto un intervallo per la comparsa del bug (*randomBug*, 800).
Funzione *randomBug*:
- utilizzo la funzione *removeBug* per ripulire tutte le celle dalla classe "bug", mostrando così una cella vuota.
- se lo score è arrivato a 20 dimezzo il tempo di visualizzazione del bug ogni volta che compare.
- creo un numero random che vada da 0 a 8, ossia gli indici delle 9 celle in griglia.
- assegno la classe "bug" ad una cella random, utilizzando come indice il numero creato in precedenza.

Per ogni cella assegno un event listener al click.
Ad ogni click controllo se la cella contiene la classe bug e se ce l'ha:
- aumento di 1 il puntenggio.
- rimuovo la classe "bug" e aggiungo la classe "splat" per mostrare che ho colpito il bug.
- dopo qualche millisecondo rimuovo la classe "splat" per ripulire la cella.

Setto un intervallo per il countdown (*countdown*, 1000).
Funzione *countDown*:
- diminuisco di 1 il timer.
- quando il timer arriva a zero: stoppo gli intervalli sia del timer sia del movimento del bug, rimuovo il bug dalle celle (funzione *removeBug*), mostro la scritta di fine del gioco e il relativo punteggio.
