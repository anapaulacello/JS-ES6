const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
let nombres=users.map(user=>user.name)
console.log(nombres)

let cambiarNombre=users.map((user)=>{
    if (user.name.charAt(0)==='A') {
       user.name='Anacleto';
    }
    return user.name
})
console.log(cambiarNombre)

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let ciudades=cities.map((city)=>{
    if(city.isVisited){
       return `${city.name} Visited`
    }
    else{
        return city.name
    }
})
console.log(ciudades)