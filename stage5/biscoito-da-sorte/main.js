const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const imgScreen1 = document.querySelector('#closed-cookie')
const btnScreen2 = document.querySelector('#buttonReset')

imgScreen1.addEventListener('click', cookieClick)
btnScreen2.addEventListener('click', toggleScreen)

function cookieClick() {
  toggleScreen()

}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
