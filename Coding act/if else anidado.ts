console.log('Program starts');
/* Realizar un programa que determine la nota en letras
A >= 90 
B >= 80
C >= 70
D >= 60
F <= 50 */

export let grade = 55;

if (grade >= 90) {
    console.log( 'A' ); 
} else if (grade >= 80) {
    console.log('B');
} else if (grade >= 70) {
    console.log('C');
} else if (grade >= 60) {
    console.log('D');
} else if (grade <= 50) {
    console.log('F');
}

console.log('Program ends');