
import { addTwoNumbers, divideTwoNumbers, multiplyTwoNumbers, substractTwoNumbers } from "../Coding act/Helpers/MathH";
//doble punto busca una carpeta atrás

//hacer add, substract, multiply y divide
let num1 = 10
let num2 = 20

let total = addTwoNumbers(num1, num2);
let total1 = substractTwoNumbers(num1, num2);
let total2 = multiplyTwoNumbers(45, 2);
let total3 = divideTwoNumbers(50, 5);

console.log('Addition: ', total);
console.log('Substraction: ', total1);
console.log('Multiplication: ', total2);
console.log('Division: ', total3);