const inputModules = require('./input');

const puzzle1 = modules => {
  return modules.reduce((acc, module) => {
    return acc + (Math.floor(module / 3) - 2);
  }, 0);
}

console.log(`Puzzle 1: ${puzzle1(inputModules)}`);

const puzzle2 = modules => {
  return modules.reduce((acc, module) => {
    let remainingModule = module;
    let moduleTotalFuel = 0;
    while (remainingModule > 0) {
      let fuel = Math.floor(remainingModule / 3) - 2;
      fuel = fuel < 0 ? 0 : fuel;
      moduleTotalFuel += fuel;

      remainingModule = fuel;
    }

    return acc + moduleTotalFuel;
  }, 0);
}

console.log(`Puzzle 2: ${puzzle2(inputModules)}`);