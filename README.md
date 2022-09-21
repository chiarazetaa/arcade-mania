# tris

Creo una griglia formata da 9 celle (tag <div> grande con all'interno 9 <div> più piccoli).

Per ogni cella aggiungo un addEventListener per controllare quando una cella viene cliccata.

Al click, per prima cosa controllo se la cella è già stata cliccata e in tal caso non procedo.

Ogni click andato a buon fine equivale ad un nuovo turno e per alternare X e O, controllo se un turno è pari o dispari e scrivo il relativo simbolo.

Ad ogni turno memorizzo in un array *cellSigns* l'indice della cella e il corrispondente simbolo.

Ad ogni turno richiamo una funzione *checkVictory* che controlla se qualcuno ha vinto.

Per controllare se qualcuno a vinto utilizzo un array *winningCombinations* con all'interno le combinazioni vincenti (8 piccoli array da 3 elementi ciascuno).

Ogni volta ciclo l'array *winningCombinations* e controllo se gli indici dei simboli inseriti (array *cellSigns*) sono una combinazione vincente.

Se la funziona *checkVictory* restituisce true, allora qualcuno ha vinto, altrimenti se il numero del turno è 9 la partita finisce in pareggio.

# memory