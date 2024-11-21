import { HTML } from '#resources/views/pages/Components/HTML'
import env from '#start/env'

export default function ShowVideos() {
  const completeHost = `${env.get('APIHOST')}`
  const http = env.get('HTTP')
  const requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  }

  async function nbsVideo() {
    try {
      const response = await fetch(`${http}://${completeHost}/admin/nbsVideos`, requestOptions)
      return await response.text()
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async function videoName() {
    try {
      const response = await fetch(`${http}://${completeHost}/admin/getVideosList`, requestOptions)
      const result = await response.text()
      const resultList = JSON.parse(result) as Array<string>
      return (
        <>
          <table class={'mt-5'}>
            <tbody>
              <tr>
                <th>Video</th>
              </tr>
              {resultList.map((video) => (
                <tr key={video}>
                  <td>{video}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )
    } catch (error) {
      console.error(error)
      return null
    }
  }

  return (
    <HTML>
      <div class={'flex flex-col gap-3 p-5 items-start'}>
        <h1>Récap des videos</h1>
        <p>Nombre de videos : {nbsVideo()}</p>
        <a
          class={'p-2 bg-blue-500 rounded-xl hover:bg-blue-300 cursor-pointer'}
          href={'/admin/screen/bigScreen'}
        >
          Afficher l'écan
        </a>
        <p>{videoName()}</p>
      </div>
    </HTML>
  )
}
