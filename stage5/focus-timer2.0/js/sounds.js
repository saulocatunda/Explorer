export default function () {
  const florestSound = new Audio('/stage5/focus-timer2.0/audios/Floresta.wav')
  const cloudSound = new Audio('/stage5/focus-timer2.0/audios/Chuva.wav')
  const fireSound = new Audio('/stage5/focus-timer2.0/audios/Lareira.wav')
  const storeSound = new Audio('/stage5/focus-timer2.0/audios/Cafeteria.wav')

  function pause() {
    florestSound.pause()
    cloudSound.pause()
    fireSound.pause()
    storeSound.pause()
  }

  function loopAudio(typeSound) {
    var currentAudio = typeSound.muted
    typeSound.loop = !currentAudio
  }

  function florestBgSound() {
    florestSound.play()
    loopAudio(florestSound)
  }
  function cloudBgSound() {
    cloudSound.play()
    loopAudio(cloudSound)
  }
  function fireBgSound() {
    fireSound.play()
    loopAudio(fireSound)
  }
  function storeBgSound() {
    storeSound.play()
    loopAudio(storeSound)
  }

  return {
    florestBgSound,
    cloudBgSound,
    fireBgSound,
    storeBgSound,
    pause
  }
}
