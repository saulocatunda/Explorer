let numbers = [0, 1]

for (const number of numbers) {
  numbers[number] = prompt('Digite dois números: ')
}

function numbersCalculated (num1, num2) {
  
}

const operators = ['+', '-', '*', '/', '%']

for (const operator of operators) {
  alert(
    `Cálculos dos números fornecido: ${numbers[0]} ${operator} ${
      numbers[1]
    } = ${} `
  )
}
