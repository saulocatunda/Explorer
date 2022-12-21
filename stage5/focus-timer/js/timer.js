function resetTimer() {
  updateTimerDisplay(minutesInitial, 0)
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
  timeCountdownOut = setTimeout(() => {
    let minutesCountdown = Number(minutesDisplay.textContent)
    let secondsCountdown = Number(secondsDisplay.textContent)

    if (secondsCountdown <= 0 && minutesCountdown == 0) {
      resetControls()
      return
    } else if (secondsCountdown <= 0) {
      secondsCountdown = 60
      minutesCountdown--
    }
    secondsCountdown--
    updateTimerDisplay(minutesCountdown, secondsCountdown)
    countdown()
  }, 1000)
}

export {countdown, resetTimer, updateTimerDisplay}