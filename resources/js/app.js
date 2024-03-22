var video = document.querySelector("#video");
var startRecord = document.querySelector("#startRecord");
var stopRecord = document.querySelector("#stopRecord");
var downloadLink = document.querySelector("#downloadLink");

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
      downloadLink.href = URL.createObjectURL(new Blob(blob));
    })

    mediaRecorder.start();
  }

  stopRecord.onclick = function () {
    startRecord.style.display = "inline";
    stopRecord.style.display = "none";
    mediaRecorder.stop();
  }
}
