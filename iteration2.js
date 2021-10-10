const game = {title: 'The last us 2',
            gender: ['action', 'zombie', 'survival'],
            year: 2020}

let {title,gender,year}=game;   
console.log(title,gender,year)

//////
const fruits = ['Banana', 'Strawberry', 'Orange'];
let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

//////
const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' }
};
let {name,race}=animalFunction();
console.log(name,race);

/////////////
const car = {nombre: 'Mazda 6', itv: [2015, 2011, 2020] }
let{nombre,itv}=car;
console.log(nombre,itv);
let [año1,año2,año3]=itv;
console.log(año1,año2,año3);