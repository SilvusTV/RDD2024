var video = document.querySelector("#video");
var startRecord = document.querySelector("#startRecord");
var stopRecord = document.querySelector("#stopRecord");
var downloadLink = document.querySelector("#downloadLink");
const dateTime = new Date().toISOString().replace(/:/g, '-')


window.onload = async function () {
  stopRecord.style.display = "none";

  const videoStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
  video.srcObject = videoStream;
  let mediaRecorder;
  startRecord.onclick = function () {
    startRecord.style.display = "none";
    stopRecord.style.display = "inline";

    mediaRecorder = new MediaRecorder(videoStream);

    let blob = [];
    mediaRecorder.addEventListener('dataavailable', function (e) {
      blob.push(e.data);
    })

    mediaRecorder.addEventListener('stop', function () {
      const video = new File(
        blob,
        `video-${dateTime}.mp4`,
        {type: 'video/mp4'}
      );
      const data = new FormData()
      data.append('video', video)

      fetch('http://localhost:3333/send', {
        // HTTP request type
        method: "POST",
        // Sending our blob with our request
        body: data
      })
        .then(response => console.log('Blob Uploaded'))
        .catch(err => console.log(err));

      const link = URL.createObjectURL(new Blob(blob));
      downloadLink.href = link
    })

    mediaRecorder.start();
  }

  stopRecord.onclick = function () {
    startRecord.style.display = "inline";
    stopRecord.style.display = "none";
    mediaRecorder.stop();
  }
}
