// @ts-nocheck
import { HTML } from '#resources/views/pages/Components/HTML'

export function Record() {
  return (
    <HTML>
      <div class="flex flex-col items-center w-full h-full">
        <h1 class="text-3xl font-bold underline w-full justify-center flex mb-4 mt-8 title">
          Remise Des Diplomes 2024
        </h1>
        <p class={'text-xl m-4'}>Enregistrez une video pour l'afficher sur l'écrant géant</p>
        <video id="video" width="854" height="480" autoplay muted class="justify-center" />
        <div class={'flex gap-6'}>
          <button
            id="startRecord"
            class={'text-xl p-5 bg-blue-500 rounded-xl m-4 hover:bg-blue-400 cursor-pointer'}
          >
            Lancer l'enregistrement
          </button>
          <button
            id="stopRecord"
            class={'text-xl p-5 bg-red-500 rounded-xl m-4 hover:bg-red-400 cursor-pointer'}
          >
            Arreter l'enregistrement
          </button>
          <div id={'finalStep'} class={'flex-col items-center'}>
            <p class={'text-xl m-4'}>Voulez vous sauvegarder la video ?</p>
            <span>
              <button
                id="saveRecord"
                class={'text-xl p-5 bg-green-500 rounded-xl m-4 hover:bg-green-400 cursor-pointer'}
              >
                Sauvegarder
              </button>
              <button
                id="cancelRecord"
                class={'text-xl p-5 bg-red-500 rounded-xl m-4 hover:bg-red-400 cursor-pointer'}
              >
                Annuler
              </button>
            </span>
          </div>
        </div>
      </div>
    </HTML>
  )
}
