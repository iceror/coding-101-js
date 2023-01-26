//Arreglo, usar ciclo for para determinar pares e impares.

let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5, 9];


for ( let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0 ){
        console.log(numbers[i], 'is even' );
    } else {
        console.log(numbers[i], 'is odd');
    }
}

// % te da el residuo de la división 2%2 = 0, 3%2= 1, etc.