export default function Timer({ minutesDisplay, secondsDisplay }) {
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
        return
      } else if (secondsCountDown < 0) {
        secondsCountDown = 5
        minutesCountDown--
      }
      updateDisplay()
      countdown()
    }, 1000)
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
    timerDown
  }
}
