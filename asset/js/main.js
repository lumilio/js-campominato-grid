


// l'utente indica un livello di difficoltà: 1 , 2 o 3
let hardness;
while (hardness != '1' && hardness != '2' && hardness != '3') {
    hardness = prompt("scegli un livello di difficoltà : 1 , 2 o 3?");
}


// creare una griglia di gioco diversa per ogni livello
const griglia = document.getElementById('container')

if (hardness == 1){
    for (let i = 0; i < 64; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell_type1'
        griglia.append(cell)
        
    }
}
else if (hardness == 2){
    for (let i = 0; i < 100; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell_type2'
        griglia.append(cell)
        
    }
}
else if (hardness == 3){
    for (let i = 0; i < 400; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell_type3'
        griglia.append(cell)
        
    }
}

// range numeri casuali

function range1() {
    let x = Math.floor(Math.random() * 100) + 1
}
function range2() {
    let x = Math.floor(Math.random() * 81) + 1
}
function range3() {
    let x = Math.floor(Math.random() * 49) + 1
}


let firstRange = range1();
let secondRange = range2();
let thirdRange = range3();



// al click mostrare il numero contenuto e colorare la cella di azzurro

