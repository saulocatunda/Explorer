export default function Timer({ minutesDisplay, secondsDisplay, controls }) {
  var timeCount
  let minutesCountDown
  let secondsCountDown
  let firstMinutes = Number(minutesDisplay.textContent)

  function countdown() {
    timeCount = setTimeout(() => {
      minutesCountDown = Number(minutesDisplay.textContent)
      secondsCountDown = Number(secondsDisplay.textContent)
      secondsCountDown--
      if (secondsCountDown < 0 && minutesCountDown <= 0) {
        clearTimeout(timeCount)
        updateMinutes()
        controls.stop()
        return
      } else if (secondsCountDown < 0) {
        secondsCountDown = 59
        minutesCountDown--
      }
      if (minutesCountDown < 0) {
        clearTimeout(timeCount)
        updateMinutes()
        controls.stop()
        return
      }
      updateDisplay()
      countdown()
    }, 1000)
  }

  function pause() {
    clearTimeout(timeCount)
  }

  function reset() {
    clearTimeout(timeCount)
    updateMinutes()
  }

  function updateDisplay() {
    minutesDisplay.textContent = String(minutesCountDown).padStart('2', 0)
    secondsDisplay.textContent = String(secondsCountDown).padStart('2', 0)
  }

  function updateMinutes() {
    minutesDisplay.textContent = String(firstMinutes).padStart('2', 0)
    secondsDisplay.textContent = '00'
  }

  function timerUp() {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(
      '2',
      0
    )
    firstMinutes = minutesDisplay.textContent
  }

  function timerDown() {
    if (Number(minutesDisplay.textContent) <= 0) {
      alert('Tempo mínimo atingido')
    } else {
      minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
      minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(
        '2',
        0
      )
    }
  }

  return {
    countdown,
    reset,
    updateMinutes,
    timerUp,
    timerDown,
    pause
  }
}
