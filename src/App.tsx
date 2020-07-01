import React from 'react'

function App() {
  const AudioContext =
    window.AudioContext ||
    window.webkitAudioContext

  const audioContext = new AudioContext()

  return (
    <div className="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-4" />
            <div class="col-md-4">
              <div>
                <h2 className="display-4">
                  React Music!
                </h2>
                <h4 className="display-5 text-muted">
                  <em>Welcome to React Music</em>
                </h4>
                <audio src="record.mp3">
                  Audio
                </audio>
              </div>
              <div class="text-center">
                <img
                  src="turntable.jpg"
                  className="rounded img-fluid mb-3"
                  alt="Turntable"
                />
                <p>
                  <div class="btn-group btn-group-lg">
                    <button
                      type="button"
                      class="btn btn-primary"
                    >
                      Play/Pause
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                    >
                      Volume Slider
                    </button>
                    <input
                      type="range"
                      id="volume"
                      class="control-volume"
                      min="0"
                      max="2"
                      value="1"
                      list="gain-vals"
                      step="0.01"
                      data-action="volume"
                    />
                  </div>
                </p>
              </div>
            </div>
            <div class="col-md-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
