// número según día de la semana.
/*Según el case (tipo de dato) se salta la línea y sigue ejecutando; se usa el break para que se rompa */
export let weekDay = 3;
// paréntesis variable o expresión

if (weekDay <= 0){
    //console.log('Error');

    throw new Error( 'Error');
} 
switch (weekDay) {
    case 1: 
    console.log('It is Monday');
    break;
    
    case 2: 
    console.log('It is Tuesday');
    break;

    case 3: 
    console.log('It is Wednesday');
    break;

    default: 
    console.log('It is not Monday, Tuesday or Wedenesday');
}
