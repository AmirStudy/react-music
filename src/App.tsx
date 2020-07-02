import React, { useState } from 'react'

const AudioContext =
  window.AudioContext || window.webkitAudioContext

const audioContext = new AudioContext()
const audioElement = document.querySelector(
  'audio'
)
const track = audioContext.createMediaElementSource(
  audioElement
)

const gainNode = audioContext.createGain()

track
  .connect(gainNode)
  .connect(audioContext.destination)

function App() {
  const [
    audioProperties,
    setAudioProperties
  ] = useState({
    playerStatus: 'stopped',
    volume: 1,
    playerImage: 'turntable.jpg'
  })

  const handlePlay = () => {
    console.log(
      `handle play, old playerStatus: ${
        audioProperties.playerStatus
      }`
    )
    audioContext.resume()

    let newStatus = ''
    let newPlayerImage = ''
    if (
      audioProperties.playerStatus === 'playing'
    ) {
      newStatus = 'stopped'
      newPlayerImage = 'turntable.jpg'
      audioElement?.pause()
    } else {
      newStatus = 'playing'
      newPlayerImage = 'giphy.webp'
      audioElement?.play()
    }

    // const newStatus =
    //   audioProperties.playerStatus === 'playing'
    //     ? 'stopped'
    //     : 'playing'

    setAudioProperties({
      playerStatus: newStatus,
      volume: audioProperties.volume,
      playerImage: newPlayerImage
    })

    // audioProperties.playerStatus === "playing"
    // ? audioElement?.play()
    // : audioElement?.pause()

    console.log(
      `new playerStatus is ${
        newStatus
      }`
    )
  }

  const changeVolume = (e) => {
    console.log(
      `updating volume to ${e.target.value}`
    )
    const newVolume = e.target.value
    gainNode.gain.value = newVolume
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-3 col-md-4" />
        <div className="col-xs-6 col-md-4">
          <div>
            <h2 className="display-3">
              React Music!
            </h2>
            <h4 className="display-5 text-muted">
              <em>Welcome to React Music</em>
            </h4>
            <div className="alert alert-warning" role="alert">
              Adjust your speaker volume before pressing Play!
            </div>
            <br />
          </div>
          <div className="text-center">
            <img
              src={audioProperties.playerImage}
              className="rounded img-fluid mb-3"
              alt="Turntable"
            />
            <br />
          </div>
          <div className="col-xs-12 text-center">
            <div className="btn-group btn-group-lg">
              <button
                type="button"
                className="btn btn-primary mr-2"
                onClick={handlePlay}
              >
                Play/Pause
              </button>
              <input
                type="range"
                id="volume"
                name="volume"
                className="control-volume"
                min="0"
                max="2"
                defaultValue="1"
                list="gain-vals"
                step="0.01"
                onChange={changeVolume}
              />
            </div>
          </div>
        </div>
        <div className="col-xs-3 col-md-4" />
      </div>
    </div>
  )
}

export default App
