# space invaders

Creo una griglia da 15x15 div e salvo ogni cella in un array.
Inizializzo lo score.
Inizializzo l'array di alieni e l'array di alieni uccisi (vuoto).
Inizializzo la direzione 'forward'.

* Aliens
Disegno il primo gruppo di alieni richiamando la funzione *drawAliens*.
Setto un intervallo per il movimento degli alieni (*moveAliens*, 400).

Funzione *moveAliens*:
- rimuovo gli alieni dalle celle precedenti richiamando la function *removeAliens*.
- se gli alieni si stanno muovendo 'forward' e raggiungono l'ultima cella a destra, sposto ogni alieno sotto di una riga e cambio la direzione in 'backward'.
- se gli alieni si stanno muovendo 'backward' e raggiungon la prima cella a sinistra, sposto agni alieno di una riga sotto e cambio la direzione in 'forward'.
(l'indice della prima cella a sinistra è un multiplo di 15, l'indice dell'ultima cella a destra se diviso per 15 da resto 14).
- incremento l'indice di ogni alieno.
- controllo se hanno vinto gli alieni richiamando la funzione *checkForAliensWin*.
- disegno gli alieni nelle nuove celle.

Funzione *drawAliens*:
Per ogni alieno:
- controllo che non sia stato già ucciso (non è nell'array *aliensKilled*)
- se non è stato ucciso assegno una cella ad ogni alieno del gruppo.

Funzione *removeAliens*:
Per ogni alieno, lo rimuovo da quella cella.


* Spaceship
Disegno la navicella nell'ultima riga al centro.
Aggiungo un event listener alla pressione delle frecce ('keydown', moveSpaceship).

Funzione *moveSpaceship*:
- rimuovo la navicella dal div precedente.
- se sto premendo la freccia sinistra e non sono nella prima cella a sinistra, decremento di 1 l'indice della navicella.
- se sto premendo la freccia destra e non sono nell'ultima cella a destra, incremento di 1 l'indice della navicella.
- disegno la navicella nella nuova cella.

* Shoot
Aggiungo un event listener alla pressione dello spazio ('keydown', *shoot*).

Funzione *shoot*:
- procedo solo se è stato premuto il tasto Space.
- Inizializzo l'indice del laser uguale all'indice corrente della navicella.
- setto un intervallo per muovere il laser sparato (*moveLaser*, 200).

Funzione *moveLaser*:
- rimuovo il laser dal div precedente.
- decremento di 15 l'indice del laser in modo che si sposti in su seguendo una linea.
- se l'indice del laser va al di sotto di zero stoppo l'intervallo di movimento del laser.
- controllo se è stato colpito un alieno richiamando la funzione *checkBoom*.
- aggiungo il laser alla nuova cella.

Funzione *checkBoom*:
Se la cella in cui è il laser contiene la classe alien:
- stoppo l'intervallo per il movimento del laser.
- rimuovo della cella l'alieno e il laser.
- aggiungo il boom e lo rimuovo dopo qualche istante.
- aggiungo all'array aliensKilled gli alieni colpiti.
- aumento di uno lo score
- controllo se gli umani hanno vinto richiamando la funzione *checkForHumansWin*.

Funzione *checkForHumansWin*:
- controllo se l'array degli alieni iniziale e quella degli alieni uccisi hanno la stessa lunghezza.
- se sono uguali, stoppo l'intervallo di movimento degli alieni e mostro la scritta di fine gioco con vittoria per gli umani.

Funzione *checkForAliensWin*:
Per ogni alieno:
- controllo se non è stato ucciso e se ha raggiunto l'indice della navicella
- se sì, stoppo l'intervallo di movimento degli alieni e mostro la scritta di fine gioco con vittoria per gli alieni.
