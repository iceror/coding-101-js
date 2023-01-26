/*Crear algortimo que determine la calificación en letras
Nota entre 100 y 90= A
80 a 89 = B
70 a 79 = C
60 a 69 = D
<60 = F
*/

let nota = 86;
let notaLetra = ' ';

if (nota >= 90) {
    notaLetra = 'A';
} else if (nota >= 80) {
    notaLetra = 'B';
} else if (nota >= 70) {
    notaLetra = 'C';
} else if (nota >= 60) {
    notaLetra = 'D';
} else if (nota < 60) {
    notaLetra = 'F';
};

console.log(nota + ' es igual a ' + notaLetra);