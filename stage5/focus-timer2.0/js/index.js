import Events from './events.js'
import Timer from './timer.js'
import Controls from './controls.js'
import Sounds from './sounds.js'
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

const sounds = Sounds()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonUp,
  buttonDown,
  buttonCloud,
  buttonFire,
  buttonTree,
  buttonStore,
  sounds
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  controls
})

Events({ controls, timer, sounds })
