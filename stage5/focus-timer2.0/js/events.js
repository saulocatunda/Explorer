import { buttonPlay, buttonPause, buttonStop, buttonUp, buttonDown } from './elements.js'

export default function eventListener({ controls, timer }) {
  buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
  })

  buttonPause.addEventListener('click', () => {
    controls.pause()
  })

  buttonStop.addEventListener('click', () => {
    controls.stop()
    timer.reset()
  })

  buttonUp.addEventListener('click', () => {
    timer.timerUp()
  })
  buttonDown.addEventListener('click', () => {
    timer.timerDown()
  })

  // buttonCloud.addEventListener('click', () => {})
  // buttonTree.addEventListener('click', () => {})
  // buttonFire.addEventListener('click', () => {})
  // buttonStore.addEventListener('click', () => {})
}
