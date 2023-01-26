//Tarea Ciclos, si estaba bien. 
//10 al 50 

export let base = 10;
let limit = 50; 
let i = 1;


for ( let i = 1; i <= limit; i++) {
   console.log(base, 'x ', i, '=', base * i);
}

// let i = 1;
// while ( i <= limit){
//     console.log(base, 'x', i , '=', base * i);
//     i++;
// }

do {
    console.log(base, 'x', i , '=', base * i);
    i++;
} while (i <= 50);

console.log('End')