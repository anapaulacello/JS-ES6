const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

let filterVideogames=videogames.filter(element=>element.genders.includes('RPG')); 


    console.log(filterVideogames)

    ////
const media = videogames.reduce((acc, element) => (acc + element.score)/videogames.length, 0);
console.log(media);

/////
let findVideogames=videogames.find(element=>
    element.genders=='RPG');
console.log(findVideogames);
