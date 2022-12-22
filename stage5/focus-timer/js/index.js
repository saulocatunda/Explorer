// EcmaScript - ES6 Modules
// default import, nome pode mudar
import Controls from './controls.js'
// named import, nome exato
import Timer from './timer.js'

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')



// Modulos
const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

buttonPlay.addEventListener('click', () => {
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', () => {
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener('click', () => {
  controls.reset()
  timer.reset()
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
  let newMinutesInitial = controls.getMinutes()
  if (!newMinutesInitial) {
    timer.reset()
    return
  }
  timer.updateDisplay(newMinutesInitial, 0)
  timer.updateMinutes(newMinutesInitial)
})