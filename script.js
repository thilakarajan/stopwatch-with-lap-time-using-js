var startTime, elapsedTime, timerInterval

function startTimer() {
  elapsedTime = 0
  startTime = Date.now() - elapsedTime
  timerInterval = setInterval(function () {
    var currentTime = Date.now()
    elapsedTime = currentTime - startTime
    updateDisplay(elapsedTime)
  }, 10)
  let div = document.createElement('div')
  div.setAttribute('id', 'lap')
  document.querySelector('.laptime').appendChild(div)
  function setLap() {
    var milliseconds = Math.floor((elapsedTime % 1000) / 10)
    var seconds = Math.floor((elapsedTime / 1000) % 60)
    var minutes = Math.floor((elapsedTime / 1000 / 60) % 60)
    var hours = Math.floor((elapsedTime / 1000 / 60 / 60) % 24)

    var displayTime =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0') +
      '.' +
      milliseconds.toString().padStart(2, '0')
    let p = document.createElement('p')
    p.textContent = displayTime
    document.getElementById('lap').appendChild(p)
  }
  document.querySelector('.lap').addEventListener('click', setLap)
}

function stopTimer() {
  clearInterval(timerInterval)
}

function resetTimer() {
  document.getElementById('lap').remove()
  clearInterval(timerInterval)
  elapsedTime = 0
  updateDisplay(elapsedTime)
}

function updateDisplay(time) {
  var milliseconds = Math.floor((time % 1000) / 10)
  var seconds = Math.floor((time / 1000) % 60)
  var minutes = Math.floor((time / 1000 / 60) % 60)
  var hours = Math.floor((time / 1000 / 60 / 60) % 24)

  var displayTime =
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0') +
    '.' +
    milliseconds.toString().padStart(2, '0')

  document.querySelector('.display').textContent = displayTime
}

document.querySelector('.start').addEventListener('click', startTimer)
document.querySelector('.stop').addEventListener('click', stopTimer)
document.querySelector('.reset').addEventListener('click', resetTimer)
