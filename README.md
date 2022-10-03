# tris

Creo una griglia formata da 9 celle (tag <div> grande con all'interno 9 <div> più piccoli).
Inizializzo il contatore dei turni a 0.

Per ogni cella: 
- aggiungo un addEventListener per controllare quando una cella viene cliccata.

Al click su una cella: 
- controllo grazie all'array *cellSigns* se la cella è già stata cliccata e in tal caso non procedo.
- ogni click andato a buon fine equivale ad un nuovo turno e per alternare X e O, controllo se un turno è pari o dispari e scrivo il relativo simbolo.
- ad ogni turno memorizzo nell'array *cellSigns* l'indice della cella e il corrispondente simbolo.
- richiamo la funzione *checkVictory* per controllare se qualcuno ha vinto.

Funzione *checkVictory*:
- creo l'array *winningCombinations* con all'interno le combinazioni vincenti (8 piccoli array da 3 elementi ciascuno).
- per ogni elemento dell'array *winningCombinations* controllo se gli indici dei simboli inseriti (array *cellSigns*) sono una combinazione vincente.
- se sono una combinazione vincente restituisco true, altrimenti false.

Se la funzione *checkVictory* restituisce true, allora qualcuno ha vinto e viene mostrata la scritta di vittoria, altrimenti se il numero del turno è 9 la partita finisce in pareggio e viene mostrata la srelativa scritta.

# memory

Creo un'array con i nomi dei simboli utilizzati.
Utilizzo la funzione di spread (...) per unire questo array ad uno identico a avere così le coppie.
Ordino in modo randomico l'array generato, che rappresenta l'intero mazzo (array *deck*).
Inizializzo il contatore degli errori a 0.

Per ogni elemento dell'array: 
- creo la card (tag <div>).
- da css imposto come background il "back" della card.
- setto un data-attribute con il nome del simbolo.
- aggiungo un event listener per quando clicco sulla card (funzione *flipCard*).
- aggiungo la card alla griglia.

Funzione *flipCard*:
- aggiungo come classi il data attribute, per cambiare il background della card e "flipped", per annotare che la card è stata girata.
- nell'array *pick* aggiungo le carte appena girate, quando si arriva a 2 carte richiamo la funzione *checkForMatch*.

Funzione *checkForMatch*:
- confronto i data-attributes delle 2 card per vedere se sono uguali.
- se sono uguali richiamo la funzione *checkForWin*.
- se sono diversi, setto un timeout di un secondo per dare il tempo di guardare le card, rimuovo le classi data-attribute e flipped in modo che la card torni con il background "back", incremento di 1 gli errori.
- svuoto l'array *pick* per il turno successivo.

Funzione *checkForWin*:
- recupero tutti gli elementi che hanno come classe "flipped".
- controllo se il numero degli elmenti con con classe "flipped" è uguale al numero di carte del mazzo (array *deck*).
- se è uguale, sono state girate tutte le carte e il gioco è finito. Viene mostrata la scritta di vittoria.

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
