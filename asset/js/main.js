
// seleziono elemento dalla DOM
const griglia = document.getElementById('container')




// l'utente indica un livello di difficoltà: 1 , 2 o 3
let hardness;
while (hardness != '1' && hardness != '2' && hardness != '3') {
    hardness = prompt("scegli un livello di difficoltà : 1 , 2 o 3?");
}



// assegno il valore di ogni opzione
let rangeMax;
let cellNumber;
let cellDimension;


if (hardness == 1){
    rangeMax = 100;
    cellNumber = 64;
    cellDimension = '125px';
}

else if (hardness == 2){
    rangeMax = 81;
    cellNumber = 100;
    cellDimension = '100px';
}

else if (hardness == 3){
    rangeMax = 49;
    cellNumber = 400;
    cellDimension = '50px';
}






function xxx() {
    for (let i = 0; i < cellNumber; i++) {

        let range = Math.floor(Math.random() * rangeMax) + 1 //-----------------------creo il numero casuale dei ivelli

        let cell = document.createElement('div');
        cell.style.width = cellDimension
        cell.style.height = cellDimension
        cell.className = 'cell_type' 
        griglia.append(cell)     //-----------------------creo un div ripetuto e ci aggiungo una classe

        let theNumber = document.createElement('div');
        theNumber.innerHTML = range 
        theNumber.className = 'd-none'
        cell.append(theNumber)
      
    }
}



xxx();











/* 
cell.addEventListener('click', theNumber.classList.remove("d-none"));
  */






// al click mostrare il numero contenuto e colorare la cella di azzurro

