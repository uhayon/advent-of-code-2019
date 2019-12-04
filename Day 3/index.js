const { wires, pathsLength, testPathsLength, testWires } = require('./input');

const parseInstruction = (currentPosition, instruction) => {
  const [direction, ...positions] = instruction;
  const movement = Number(positions.join(''));

  switch (direction.toUpperCase()) {
    case 'U':
      return { ...currentPosition, y: currentPosition.y + movement };
    case 'D':
      return { ...currentPosition, y: currentPosition.y - movement};
    case 'L':
      return { ...currentPosition, x: currentPosition.x - movement};
    case 'R':
      return { ...currentPosition, x: currentPosition.x + movement};
    default:
      return { ...currentPosition };
  }
}

const puzzle1 = ([wire1, wire2], wiresPathCount) => {
  let firstWirePath = [{ x: 0, y: 0 }];
  let secondWirePath = [{ x: 0, y: 0 }];

  const intersections = [];

  for (let i = 0; i < wiresPathCount; i++) {
    const [firstWireLastPosition] = firstWirePath;
    const [secondWireLastPosition] = secondWirePath;

    const firstWireCurrentPosition = parseInstruction(firstWireLastPosition, wire1[i]);
    const secondWireCurrentPosition = parseInstruction(secondWireLastPosition, wire2[i]);

    if (secondWirePath.find(path => path.x === firstWireCurrentPosition.x && path.y === firstWireCurrentPosition.y)) {
      intersections.push(firstWireCurrentPosition);
    }

    if (intersections.length < 2 && firstWirePath.find(path => path.x === secondWireCurrentPosition.x && path.y === secondWireCurrentPosition.y)) {
      intersections.push(secondWireCurrentPosition);
    }

    if (intersections.length === 2) break;

    firstWirePath = [firstWireCurrentPosition, ...firstWirePath];
    secondWirePath = [secondWireCurrentPosition, ...secondWirePath];
  }

  console.log(firstWirePath)
  console.log(secondWirePath)
}

puzzle1(testWires, testPathsLength)