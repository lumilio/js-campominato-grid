


// l'utente indica un livello di difficoltà: 1 , 2 o 3
let hardness;
while (hardness != '1' && hardness != '2' && hardness != '3') {
    hardness = prompt("scegli un livello di difficoltà : 1 , 2 o 3?");
}


// creare una griglia di gioco diversa per ogni livello
const griglia = document.getElementById('container')





const myfuncion = () => {}


let theNumber = document.createElement('div');
cell.append(theNumber)
theNumber.className = 'd-none'
theNumber.innerHTML = firstRange //-----------------------







if (hardness == 1){
    for (let i = 0; i < 64; i++) {

        

        let cell = document.createElement('div');
        griglia.append(cell)
        cell.className = 'cell_type1'      //-----------------------creo un div ripetuto e ci aggiungo una classe

        let firstRange = Math.floor(Math.random() * 100) + 1 //-----------------------genero un numero random 

        let theNumber = document.createElement('div');
        cell.append(theNumber)
        theNumber.className = 'd-none'
        theNumber.innerHTML = firstRange //-----------------------

        


    } 

}





else if (hardness == 2){
    for (let i = 0; i < 100; i++) {

        let secondRange = Math.floor(Math.random() * 81) + 1
        let cell = document.createElement('div');
        cell.className = 'cell_type2'
        griglia.append(cell)
        cell.append(secondRange)
        
    }
}


else if (hardness == 3){
    for (let i = 0; i < 400; i++) {

        let thirdRange = Math.floor(Math.random() * 49) + 1
        let cell = document.createElement('div');
        cell.className = 'cell_type3'
        griglia.append(cell)
        cell.append(thirdRange)
        
    }
}










// al click mostrare il numero contenuto e colorare la cella di azzurro

