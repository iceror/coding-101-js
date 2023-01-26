// //Solución IP
// export let i = 1;

//  switch (i++){
//     case 1: 
//     console.log(1 , 2 , 3 , 4 , 5);

//     case 2: 
//     console.log( 2 , 4 , 6 , 8 , 10);

//     case 3: 
//     console.log( 3, 6, 9, 12 , 15 );

//     case 4:
//     console.log( 4, 8, 12, 16, 20 );

//     case 5:
//         console.log( 5, 10, 15, 20, 25);
//  }

//Solución FH
for (let i = 1; i <= 5; i++){
     let line = ' ';

     for ( let j = 1; j <= 5; j++ ){
        line += ' ' + ( j * i);
     }

     console.log(line);
}

// for (let i = 1; i <= 5; i++){
//     let line = '';

//     for ( let j = 1; j <= 5; j++ ){
//        line +=  ` ${ j * i} `; 
//     }

//     console.log(line);
// }