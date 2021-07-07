// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
// for example, a tower of 3 floors looks like below
// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]

function towerBuilder(nFloors) {
   let tower = [];
   let space = ' ';
   let stars = '*';
   let basementLength = 1;
   if (nFloors !== 1) { basementLength = 1 + 2 * (nFloors - 1) } // calculate tower element length
   for (let i = 1; i <= nFloors; i++) {
      let spaceQuantity = (i - 1) * 2; // total space quantity
      let starsQuantity = basementLength - spaceQuantity; // stars quantity
      let floor = `${space.repeat(spaceQuantity / 2)}${stars.repeat(starsQuantity)}${space.repeat(spaceQuantity / 2)}`;
      tower.push(floor)
   }
   tower.reverse()
   return console.log(tower)
}

towerBuilder(3)