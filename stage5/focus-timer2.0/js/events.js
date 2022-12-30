import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonUp,
  buttonDown,
  buttonCloud,
  buttonFire,
  buttonStore,
  buttonTree,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

export default function eventListener() {
  buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  })
  buttonPause.addEventListener('click', ()=> {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  })
}

