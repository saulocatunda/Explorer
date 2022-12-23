import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

// Modulos
const sound = Sound()

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
  sound.pressButton()
})

buttonPause.addEventListener('click', () => {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', () => {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sound.bgAudio.play()
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  sound.bgAudio.pause()
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
