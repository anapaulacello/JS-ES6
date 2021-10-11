const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let mayoresDeEdad=ages.filter(element=>element>18);
console.log(mayoresDeEdad);

///////////
 let pares=ages.filter(element=>element%2===0);
 console.log(pares);

///////////7
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let LOL = streamers.filter((element) => {
    if (element.gameMorePlayed == 'League of Legends') {
        return element
    }
});
console.log(LOL);

let tieneU = streamers.filter((element) => {
    if (element.name.includes('u')) {
        return element
    }
});
console.log(tieneU);

let mixLOLL = streamers.filter((element) => {
    if (element.gameMorePlayed.includes('Legends')) {
        if (element.age>35) {
            console.log(element.gameMorePlayed.toUpperCase());
             return element.gameMorePlayed.toUpperCase();
             
        }

    }
});
console.log(mixLOLL);

let newInput=document.querySelector(`input[data-function="toFilterStreamers]`)

let match = streamers.filter((element) => {
    if (element.name.includes(`${newInput.value}`)) {
        return element.name
    }
});
console.log(match)