/* ESERCIZIO */

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
    // Creare un loop che si ripeta 5 volte
    var sumResult = document.querySelector("h1");

    var inputSum = 0;

    for (let i = 0; i < 5; i++) {

        // Ogni volta che si ripete chiede un input (prompt?)
        const userInput = parseInt(prompt());
        console.log(userInput);

        inputSum += userInput;
            
    }

    sumResult.innerHTML = "Il risultato è " + inputSum;
    console.log("Il risultato è " + inputSum);

    
    // Aggiunge l'input all'input precedente

//  Il programma stampa la somma di tutti i numeri inseriti.
    //finito il loop stampa il totale