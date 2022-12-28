import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  buttonSet
} from './elements.js'
//{Importando as dependências que a função abaixo precisará}

// {Parâmetros a serem exportados como default}
export default function EventListener({ controls, timer, sound }) {
  buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
    sound.pressButton()
    sound.bgAudio.play()
  })

  buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    sound.pressButton()
    sound.bgAudio.pause()
  })

  buttonStop.addEventListener('click', () => {
    timer.hold()
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
}
