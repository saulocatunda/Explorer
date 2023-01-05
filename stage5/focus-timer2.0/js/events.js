import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonUp,
  buttonDown,
  buttonCloud,
  buttonFire,
  buttonStore,
  buttonTree
} from './elements.js'

export default function eventListener({ controls, timer, sounds }) {
  buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
  })

  buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.pause()
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

  buttonCloud.addEventListener('click', () => {
    sounds.pause()
    sounds.cloudBgSound()
  })
  buttonTree.addEventListener('click', () => {
    sounds.pause()
    sounds.florestBgSound()
  })
  buttonFire.addEventListener('click', () => {
    sounds.pause()
    sounds.fireBgSound()
  })
  buttonStore.addEventListener('click', () => {
    sounds.pause()
    sounds.storeBgSound()
  })
}
