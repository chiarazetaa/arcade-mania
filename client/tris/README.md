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
