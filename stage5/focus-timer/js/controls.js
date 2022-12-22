export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
}) {
  function play() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
  }
  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }
  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
  }
  function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }
  function getMinutes() {
    let newMinutesInitial = prompt('Quantos minutos?')
    if (!newMinutesInitial) {
      return false
    }
    return newMinutesInitial
  }
  return {
    resetControls,
    play,
    pause,
    reset,
    getMinutes
  }
}
