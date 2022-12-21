// EcmaScript - ES6 Modules
// default import, nome pode mudar
import resetControls from './controls.js'
// named import, nome exato
import { countdown, resetTimer, updateTimerDisplay } from './timer.js'

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timeCountdownOut
let minutesInitial = Number(minutesDisplay.textContent)

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
  clearTimeout(timeCountdownOut)
})

buttonStop.addEventListener('click', () => {
  resetControls()
  resetTimer()
  clearTimeout(timeCountdownOut)
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
  let newMinutesInitial = prompt('Quantos minutos?')
  if (!newMinutesInitial) {
    resetTimer()
    return
  }
  minutesInitial = newMinutesInitial
  updateTimerDisplay(minutesInitial, 0)
})
