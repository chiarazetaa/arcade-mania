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

