/*
Encontre a solução ao problema:

Pergunte o nome do usuário e escreva a mensagem:
"Olá, [nome do usuário]"



let nome = prompt("Qual o seu nome?")
alert("Olá, " + [nome])



let firstNumber = prompt('Digite o primeiro número: ')
let secondNumber = prompt('Digite o Segundo número: ')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const divi = firstNumber / secondNumber
const expon = firstNumber ** secondNumber
const rest = firstNumber % secondNumber

alert('O resultado da soma é: ' + sum)
alert('O resultado da subtração é: ' + sub)
alert('O resultado da multiplicação é: ' + multi)
alert('O resultado da divisão é: ' +  divi.toFixed(3))
alert('O resultado da exponenciação é: ' + expon)
alert('O resultado do resto da divisão é: ' + rest)
// Desafio da média
let nomeAluno = ''
let notasAluno = []
let mediaAluno = 0
let numeroDeNotas = 0

nomeAluno = prompt('Qual é o nome do aluno?')
for (let i = 0; i < 3; i++) {
  notasAluno[i] = prompt('Qual a sua ' + (i + 1) + 'º nota?')
  numeroDeNotas++
}

for (let p = 0; p < notasAluno.length; p++) {
  mediaAluno += Number(notasAluno[p])
}

mediaAluno = mediaAluno / numeroDeNotas
mediaAluno = mediaAluno.toFixed(2)

if (mediaAluno >= 7) {
  alert('Parabéns ' + nomeAluno + ', você passou com a média de: ' + mediaAluno)
} else {
  alert(
    'Lamento, ' + nomeAluno + ' deverá repetir, sua média é de: ' + mediaAluno
  )
}


let listaCompras = []

for (let item = 0; item < 10; item++) {
  listaCompras[item] = prompt('O que deseja comprar? Item ' + (item + 1))
}

alert('Sua lista de compras: ' + listaCompras)

// for (const itens of listaCompras) {
//   alert('Sua lista de compras contém os itens: ' + itens)
// }


let attempts = 1
let result = prompt('Adivinhe um número que estou pensando? Está entre 0 e 10')
const randomNumber = Math.round(Math.random() * 10)

while (Number(result) != randomNumber) {
  result = prompt('Que pena, errou o número. tente novamente')
  attempts++
}

alert(
  `Parabéns, você acertou o número. Número sorteado = ${randomNumber}, em ${attempts} tentativas.`
)
*/

let option
let items = []

while (option != 3) {
  option = Number(
    prompt(`
  Olá usuário! Digite a opção desejada.
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `)
  )

  switch (option) {
    case 1:
      break
    case 2:
      break
    case 3:
      break
    default:
      break
  }

  if (option == 1) {
    items.push(prompt('Digite o nome do item:  '))
  } else if (option == 2) {
    if (items.length == 0) {
      alert('Não existem itens na lista')
    } else {
      alert('Itens: ' + items)
    }
  }
}
alert('Tchau')
