export default function Controls({
  buttonPause,
  buttonPlay,
  sounds
}) {
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    
  }
  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    sounds.pause()
  }
  function stop() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    sounds.pause()

  }
  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  return {
    play,
    pause,
    stop,
    reset
  }
}
