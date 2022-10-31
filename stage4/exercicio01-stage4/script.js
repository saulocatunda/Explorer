let numbers = [0, 1]

for (const number of numbers) {
  numbers[number] = prompt('Digite dois números: ')
}
let numbersCalculated = [4]

const operators = ['+', '-', '*', '/', '%']

function calculator(num1, num2) {
  numbersCalculated[0] = num1 + num2
  numbersCalculated[1] = num1 - num2
  numbersCalculated[2] = num1 * num2
  numbersCalculated[3] = (num1 / num2).toFixed(2)
  numbersCalculated[4] = num1 % num2
}

calculator(Number(numbers[0]), Number(numbers[1]))

for (let index = 0; index < numbersCalculated.length; index++) {
  alert(
    `Cálculos dos números fornecido: ${numbers[0]} ${operators[index]} ${numbers[1]} = ${numbersCalculated[index]}`
  )
}
