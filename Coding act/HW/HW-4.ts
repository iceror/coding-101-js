//Arreglo, usar ciclo for para determinar el número mayor.

export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5, 9];
let maxNumber = -99999;
for ( let i = 0; i < numbers.length; i++){
    
    if (numbers[i] >= maxNumber ){
        maxNumber = numbers[i];
    }    
}

console.log('El número mayor es:' , maxNumber);