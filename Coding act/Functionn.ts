//valores por defecto se mandan al final de la function
export function addTwoNumbers( num1: number, num2: number){ 
    return(num1 + num2); //el console log sólo imprime, se necesita el retorno 

}

let total = addTwoNumbers(10, 4);

console.log('Total: ', total);