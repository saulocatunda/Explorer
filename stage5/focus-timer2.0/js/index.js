import Events from './events.js'
import Timer from './timer.js'
import Controls from './controls.js'
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

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonUp,
  buttonDown,
  buttonCloud,
  buttonFire,
  buttonTree,
  buttonStore
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

Events({ controls, timer })
