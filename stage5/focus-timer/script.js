const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
console.log(minutesDisplay.textContent)

function countdown() {
  setTimeout(() => {
    let minutesCountdown = Number(minutesDisplay.textContent)
    let secondsCountdown = Number(secondsDisplay.textContent)

    secondsDisplay.textContent = String(secondsCountdown - 1).padStart(2, '0')

    if (minutesCountdown <= 0) {
      buttonStop.classList.add('hide')
      buttonPlay.classList.remove('hide')
      buttonPause.classList.add('hide')
      buttonSet.classList.remove('hide')
      return
    }

    if (secondsCountdown <= 0) {
      secondsCountdown = 60
      minutesDisplay.textContent = String(minutesCountdown - 1).padStart(2, '0')
    }
    
    secondsDisplay.textContent = String(secondsCountdown - 1).padStart(2, '0')
    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  buttonStop.classList.remove('hide')
  buttonSet.classList.add('hide')
  countdown()
})

buttonPause.addEventListener('click', () => {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
})

buttonStop.addEventListener('click', () => {
  buttonStop.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSet.addEventListener('click', () => {
  minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
})
