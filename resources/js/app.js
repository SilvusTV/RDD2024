//Record JS var
var video = document.querySelector('#video')
var startRecord = document.querySelector('#startRecord')
var stopRecord = document.querySelector('#stopRecord')
var finalStep = document.querySelector('#finalStep')
var save = document.querySelector('#saveRecord')
var cancel = document.querySelector('#cancelRecord')
const dateTime = new Date().toISOString().replace(/:/g, '-')

//BigScreen JS var
var bigScreen = document.querySelector('#bigScreen')
var bigScreenBack = document.querySelector('#bigScreenBack')

window.onload = async function () {
  if (startRecord || stopRecord || finalStep || save || cancel) {
    finalStep.style.display = 'none'
    stopRecord.style.display = 'none'

    const videoStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    video.srcObject = videoStream
    let mediaRecorder
    startRecord.onclick = function () {
      startRecord.style.display = 'none'
      stopRecord.style.display = 'inline'

      mediaRecorder = new MediaRecorder(videoStream)

      let blob = []
      mediaRecorder.addEventListener('dataavailable', function (e) {
        blob.push(e.data)
      })

      save.addEventListener('click', function () {
        const video = new File(blob, `video-${dateTime}.mp4`, { type: 'video/mp4' })
        const data = new FormData()
        data.append('video', video)
        fetch('https://rdd.silvus.me/send', {
          // HTTP request type
          method: 'POST',
          // Sending our video in our request
          body: data,
        })
          .then(() => {
            location.reload()
          })
          .catch((err) => {
            console.log(err)
            location.reload()
          })
        startRecord.style.display = 'inline'
        finalStep.style.display = 'none'
      })
      cancel.addEventListener('click', function () {
        startRecord.style.display = 'inline'
        finalStep.style.display = 'none'
      })

      mediaRecorder.start()
    }

    stopRecord.onclick = function () {
      stopRecord.style.display = 'none'
      finalStep.style.display = 'flex'
      mediaRecorder.stop()
    }
  }
  if (bigScreen || bigScreenBack) {
    bigScreenBack.style.display = 'none'
    await sleep(5000).then(() => {
      bigScreenBack.style.display = 'flex'
      bigScreen.play()
    })
    bigScreen.addEventListener('ended', () => {
      bigScreenBack.style.display = 'none'
      const body = new FormData()
      body.append('src', bigScreen.src)
      fetch('https://rdd.silvus.me/remove', {
        method: 'POST',
        body: body,
      }).then(() => {
        location.reload()
      })
    })
  }
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
