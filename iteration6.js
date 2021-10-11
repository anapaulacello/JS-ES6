const numbers = [32, 21, 63, 95, 100, 67, 43];
let match=numbers.find(element =>element ===100);
console.log(match);

///////////
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
let match2=movies.find(element=> element.date==2010);
console.log(match2);
//////////
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

let matchAliens=aliens.find(element=>element.name=='Cucushumushu')
let matchMutations=mutations.find(element=>element.name=='Porompompero')
console.log(matchMutations)
let concat={...matchAliens,matchMutations}
console.log(concat)