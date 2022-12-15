const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const imgScreen1 = document.querySelector('#closed-cookie')
const btnScreen2 = document.querySelector('#buttonReset')
const message = document.querySelector('#randomMessage')

imgScreen1.addEventListener('click', cookieClick)
btnScreen2.addEventListener('click', toggleScreen)

function cookieClick() {
  toggleScreen()
  var randomNumber = Math.random() * messagers.length
  randomNumber = Math.floor(randomNumber)
  message.innerText = messagers[randomNumber]
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function messagersGenerator() {
  return [
    'Não importa o que a vida fez de você, importa o que você fez com o que a vida fez de você',
    'Agradeça por cada dia que passa, pois significa que é uma nova oportunidade para vencer',
    'Seja para os outros o que você gostaria que fossem para você',
    'Encare os problemas de hoje, como uma chance de mostrar a si mesmo que você é mais forte que eles'
  ]
}

var messagers = messagersGenerator()

