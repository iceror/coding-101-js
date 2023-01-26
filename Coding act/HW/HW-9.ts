export function heroesThatStartWith(heroesArray: string[], firstLetter: string) {

    let newHeroes: string[] = [];

    for (let name of heroesArray) {

        if (name.toUpperCase().startsWith(firstLetter.toUpperCase())) {
            newHeroes.push(name.toUpperCase());
        }
    }
    return newHeroes;

}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'stix', 'She Hulk', 'spiderman', 'Captain Marvel'];

let heroesWithLetterS = heroesThatStartWith(heroes, 's');
console.log('\n\n', heroesWithLetterS); 