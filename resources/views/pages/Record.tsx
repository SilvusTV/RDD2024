import {HTML} from "#resources/views/pages/Components/HTML";

export function Record() {

  return (
    <HTML>
      <div class="flex flex-col items-center w-full h-full">
        <h1 class="text-3xl font-bold underline w-full justify-center flex mb-4">
          Enregistrement video de la remise des diplomes 2024
        </h1>
        <video id="video" width="854" height="480" autoplay class="justify-center"/>
        <div class={"flex gap-6 m-9"}>
          <button id="startRecord" class={"p-9 bg-blue-500 rounded-xl m-9 hover:bg-blue-300 cursor-pointer"}>Start Recording</button>
          <button id="stopRecord" class={"p-9 bg-blue-500 rounded-xl m-9 hover:bg-blue-300 cursor-pointer"}>Stop Recording</button>
          <a id="downloadLink" download="video.mp4" class={"p-9 bg-blue-500 rounded-xl m-9 hover:bg-blue-300 cursor-pointer"}>Download Video</a>
        </div>
      </div>
    </HTML>
  )
}