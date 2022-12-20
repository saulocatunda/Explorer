const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
console.log(minutesDisplay.textContent)

buttonPlay.addEventListener('click', pauseEvent)
buttonPause.addEventListener('click', pauseEvent)
buttonStop.addEventListener('click', resetButton)
buttonSoundOn.addEventListener('click', muteSound)
buttonSoundOff.addEventListener('click', muteSound)
buttonSet.addEventListener('click', () => {
  let minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent = minutes
})

function pauseEvent() {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  buttonStop.classList.toggle('hide')
  buttonSet.classList.toggle('hide')
}

function resetButton() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
}

function muteSound() {
  buttonSoundOn.classList.toggle('hide')
  buttonSoundOff.classList.toggle('hide')
}
