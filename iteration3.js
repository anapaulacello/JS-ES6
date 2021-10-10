const pointsList = [32, 54, 21, 64, 75, 43]
let copy=[...pointsList];

///////
const toy = {name: 'Bus laiyiar',
date: '20-30-1995',
color: 'multicolor'};
let copyToy={...toy};
//////////
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

let unir=[...pointsList,pointsLis2];

/////
const toyOther = {name: 'Bus laiyiar',
 date: '20-30-1995',
  color: 'multicolor'};

const toyUpdate = {lights: 'rgb',
 power: ['Volar like a dragon','MoonWalk']}

 let fusion={...toyOther,...toyUpdate}
 ////////
 const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
 let cpyColors=[...colors]
 cpyColors.splice(2,1);
 