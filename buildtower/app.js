// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  let asteriks = 1;
  let treeArray = [];
  let str = "*";
  let space;

  function generateAsterik(num) {
    return str.repeat(num);
  }

  for (let i = 1; i <= nFloors; i++) {
    space = " ".repeat(nFloors - i);
    treeArray.push(`${space}${generateAsterik(asteriks)}${space}`);
    asteriks += 2;
  }

  return treeArray
}
towerBuilder(6);
