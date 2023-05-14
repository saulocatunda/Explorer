const messageDisplay = document.querySelector('#message')

const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const button4 = document.querySelector('#button4')
const button5 = document.querySelector('#button5')
const button6 = document.querySelector('#button6')
const button7 = document.querySelector('#button7')
const button8 = document.querySelector('#button8')
const button9 = document.querySelector('#button9')
const button10 = document.querySelector('#button10')

button1.addEventListener('click', () => {
  messageDisplay.innerHTML = 'Hello World!'
})

button2.addEventListener('click', () => {
  let firstValue = prompt('Valor da primeira variável')
  let secondValue = prompt('Valor da segunda variável')
  messageDisplay.innerHTML = `O valor da soma é = ${
    Number(firstValue) + Number(secondValue)
  }`
})

button3.addEventListener('click', () => {
  let variableToVerify = prompt('Digite um número ou letra')
  if (!isNaN(variableToVerify)) {
    messageDisplay.innerHTML = 'É um número'
  } else {
    messageDisplay.innerHTML = 'Não é um némero'
  }
})

button4.addEventListener('click', () => {
  let variableToVerify = prompt('Digite qualquer coisa')
  if (isNaN(variableToVerify)) {
    messageDisplay.innerHTML = 'É uma string'
  } else {
    messageDisplay.innerHTML = 'Não é uma string'
  }
})

button5.addEventListener('click', () => {
  let variableToVerify = prompt('Digite um valor booleano')
  if (variableToVerify === 'true') {
    messageDisplay.innerHTML = 'É verdadeiro'
  } else {
    messageDisplay.innerHTML = 'É falso'
  }
})

button6.addEventListener('click', () => {
  let firstNumber = prompt('Digite um número')
  let secondNumber = prompt('Digite outro número')
  messageDisplay.innerHTML = `O valor da subtração é = ${
    Number(firstNumber) - Number(secondNumber)
  }`
})

button7.addEventListener('click', () => {
  let firstNumber = prompt('Digite um número')
  let secondNumber = prompt('Digite outro número')
  messageDisplay.innerHTML = `O valor da multiplicação é = ${
    Number(firstNumber) * Number(secondNumber)
  }`
})

button8.addEventListener('click', () => {
  let firstNumber = prompt('Digite um número')
  let secondNumber = prompt('Digite outro número')
  messageDisplay.innerHTML = `O valor da divisão é = ${
    Number(firstNumber) / Number(secondNumber)
  }`
})

button9.addEventListener('click', () => {
  let firstNumber = prompt('Digite um número')
  let secondNumber = prompt('Digite outro número')
  if ((Number(firstNumber) % Number(secondNumber)) === 0) {
    messageDisplay.innerHTML = 'É par'
  } else {
    messageDisplay.innerHTML = 'É ímpar'
  }
})


button10.addEventListener('click', () => {
  let firstNumber = prompt('Digite um número')
  let secondNumber = prompt('Digite outro número')
  if ((Number(firstNumber) % Number(secondNumber)) !== 0) {
    messageDisplay.innerHTML = 'É impar'
  } else {
    messageDisplay.innerHTML = 'É par'
  }
})