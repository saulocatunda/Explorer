export default function Controls({
  buttonPause,
  buttonCloud,
  buttonDown,
  buttonFire,
  buttonPlay,
  buttonStop,
  buttonStore,
  buttonTree,
  buttonUp
}) {
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }
  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  function stop() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
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
