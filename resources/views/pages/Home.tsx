import { HTML } from '#resources/views/pages/Components/HTML'

export default function Home() {
  return (
    <HTML>
      <h1 class="title text-3xl font-bold underline w-full justify-center flex absolute">
        Enregistrement video de la remise des diplomes 2024
      </h1>
      <div class={'flex justify-center gap-3 items-center w-full h-full'}>
        <a
          class={'p-9 bg-blue-500 rounded-xl m-9 hover:bg-blue-300 cursor-pointer'}
          href={'/record'}
        >
          Recorder
        </a>
        <a
          class={'p-9 bg-blue-500 rounded-xl m-9 hover:bg-blue-300 cursor-pointer'}
          href={'/admin/screen/showVideos'}
        >
          Screen
        </a>
      </div>
    </HTML>
  )
}
