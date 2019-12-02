const inputList = require('./input');

const validOpcodes = [1, 2, 99];

const puzzle1 = numbersList => {
 const outputList = [...numbersList];
 outputList[1] = 12;
 outputList[2] = 2;

  for (let i = 0; i < outputList.length; i += 4) {
    const [opcode, firstValuePosition, secondValuePosition, outputPosition] = outputList.slice(i, i + 4);
    if (!validOpcodes.includes(opcode) || opcode === 99) break;

    const [firstValue, secondValue] = [outputList[firstValuePosition], outputList[secondValuePosition]];

    if (outputPosition <= outputList.length) {
      const newValue = opcode === 1 ? firstValue + secondValue : firstValue * secondValue;
      console.log('-------------------------')
      console.log('Opcode:', opcode);
      console.log('First value:', `Position ${firstValuePosition}, value ${firstValue}`);
      console.log('Second value:', `Position ${secondValuePosition}, value ${secondValue}`);
      console.log('Output:', `Position ${outputPosition}, Before ${outputList[outputPosition]}, Now ${newValue}`);
      console.log('-------------------------')
      outputList[outputPosition] = newValue;
    }
  }

  return outputList;
}

console.log(puzzle1(inputList)[0])