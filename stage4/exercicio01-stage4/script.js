let numbers = [0, 1]

for (const number of numbers) {
  numbers[number] = prompt(`Digite ${numbers[number] + 1}º número: `)
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

if (numbers[0] == numbers[1]) {
  alert('Os números fornecidos são iguais em valor')
} else {
  alert('Os numeros fornecidos são diferentes')
}
if (numbersCalculated[0] % 2 == 0) {
  alert('A soma dos dois números fornecido é um número "par"')
} else {
  alert('A soma dos dois números fornecidos é um número "ímpar"')
}

for (let index = 0; index < numbersCalculated.length; index++) {
  alert(
    `Cálculos dos números fornecido: ${numbers[0]} ${operators[index]} ${numbers[1]} = ${numbersCalculated[index]}`
  )
}
