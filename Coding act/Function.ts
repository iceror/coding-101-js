//la función espera el tipo de script que se especifica.
//name es sólo cómo se usará el argumento dentro de la función (scope).
export function greet(name: string){
    console.log('Aló ' +  name);
}

let firstName = 'Fricsifu';
greet(firstName); //se llama la función