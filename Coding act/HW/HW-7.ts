export function max(numbersArray: Array<number> ) {
    return(Math.max(...numbersArray));
}
let numbers = [5, 2, 6, 4, 7, 23, 63 ];

console.log(max(numbers));


let max2 = (numbersArray: Array<number> ) => {
    return(Math.max(...numbersArray));
}
let numbers2 = [5, 2, 6, 4, 7, 23, ];

console.log(max2(numbers2));


let max3 = (a:number, b:number, c:number) => {
    if (a > b && a > c){
        return a;
    } else if ( b > a && b > c ){
        return b;
    } else {
        return c;
    }
}

console.log(max3(5, 3, 6));