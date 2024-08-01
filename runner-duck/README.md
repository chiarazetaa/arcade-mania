# runner duck

Inizializzo la strada formata dal 10 tag <div>.
Aggiungo la papera al div con index 1.
Inizializzo la velocità iniziale di spostamento della pianta *plantSpeed* = 200.
Richiamo la funzione *addPlant* per far comparire la pianta.

Funzione *addPlant*:
- inizializzo la variabile *currentPlantIdx* valorizzata con l'index dell'ultimo div della strada.
- aggiungo la pianta a quest'ultimo div.
- setto un intervallo per muovere la pianta (*movePlant*, *plantSpeed*)

Funzione *movePlant*:
- aumento di 1 lo score.
- quando lo score raggiunge 50 aumento la velocità *plantSpeed*.
- rimuovo la pianta dal div corrente *currentPlantIdx*.
- decremento di uno l'indice *currentPlantIdx*.
- se l'indice raggiunge lo zero, la pianta è arrivata alla fine della strada. Stoppo l'intervallo e richiamo ricorsivamente *addPlant* per aggiungere una nuova pianta.
- controllo che non ci sia stato nessun crash richiamando la funzione *checkCrash*.
- aggiungo la pianta al div successivo (con index decrementato).

Funzione *checkCrash*:
Se la pianta e la papera sono sullo stesso div (stesso indice) e la papera non sta saltando (il div non ha la classe duck-jump):
- stoppo l'intervallo.
- rimuovo la papera e e al suo posto metto la pianta.
- mostro la scritta di fine gioco CRASH!

Aggiungo l'event listener alla pressione del tasto (keydown, *jump*)
Funzione *jump*:
Se ho premuto il tasto Space e NON in modo ripetuto:
- aggiungo alla papera la classe duck-jump per farla saltare.
- setto un timeout di 300 ms per rimuovere la classe duck-jump e far tornare a terra la papera.
