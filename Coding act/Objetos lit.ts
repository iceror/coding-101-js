//Objetos literales

let person = {
    name : 'Juana',
    age : 32,
    isActive : true,
    hobbies : ['soccer', ' crotchet', ' swimming'],
    toString(){
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objectString);
    }
} 

person.toString(); //para llamar a una función se usa ();

// console.log(person.name);  //notación de punto para seleccionar una propiedad. dentro del objeto tambipen hay métodos (morados, hacen algo sobre la propiedad)