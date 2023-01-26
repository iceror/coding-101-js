interface Person {
    name: string;
    age: number;
    isActive: boolean;
}   //te dice cómo luce el objeto/ qué propiedades tiene el objeto


export let fernando: Person = {
    name: 'Fernando',
    age: 36,
    isActive: true
};


let melissa: Person = {
    name: 'Melissa',
    age: 34,
    isActive: false
};

let juan: Person = {
    name: 'Juan',
    age: 25,
    isActive: false
};

let people = [fernando, melissa, juan];

for ( let i = 0; i <= people.length -1; i++) {
    let person = people[i];
    console.log( person.name + ' ' + person.age);

}
