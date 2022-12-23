import Sound from './sounds.js'
const sound = Sound()

// Factory
export default function Timer({
  //Injeção de dependências
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timeCountdownOut
  let minutesInitial = Number(minutesDisplay.textContent)

  function reset() {
    updateDisplay(minutesInitial, 0)
  }

  function updateDisplay(newMinutes, newSeconds) {
    newMinutes = newMinutes === undefined ? minutesInitial : newMinutes
    newSeconds = newSeconds === undefined ? 0 : newSeconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(newSeconds).padStart(2, '0')
    updateMinutes(minutesInitial)
  }

  function countdown() {
    timeCountdownOut = setTimeout(() => {
      let minutesCountdown = Number(minutesDisplay.textContent)
      let secondsCountdown = Number(secondsDisplay.textContent)
      // Clean Code
      let isFinished = secondsCountdown <= 0 && minutesCountdown == 0

      if (isFinished) {
        resetControls()
        updateDisplay()
        sound.endTime()
        return
      } else if (secondsCountdown <= 0) {
        secondsCountdown = 60
        minutesCountdown--
      }
      secondsCountdown--
      updateDisplay(minutesCountdown, secondsCountdown)
      countdown()
    }, 1000)
  }
  function updateMinutes(newMinutes) {
    minutesInitial = newMinutes
  }
  function hold() {
    clearTimeout(timeCountdownOut)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }
}
