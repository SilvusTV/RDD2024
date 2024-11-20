import {HTML} from "#resources/views/pages/Components/HTML";
import env from "#start/env";

export default function ShowVideos() {
  const completeHost = `${env.get('APIHOST')}`

  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow"
  };

  async function nbsVideo() {
    let resultNumber;
    await fetch(`https://${completeHost}/admin/nbsVideos`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        resultNumber = result
      })
      .catch((error) => console.error(error));
    return resultNumber;
  }

  async function videoName() {
    let resultList: Array<string> = [];
    await fetch(`https://${completeHost}/admin/getVideosList`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        resultList = JSON.parse(result) as Array<string>
      })
      .catch((error) => console.error(error));
    return (
      <>
        <table class={"mt-5"}>
          <tbody>
          <tr>
            <th>Video</th>
          </tr>
          {resultList.map((video) => {
            return (
              <tr>
                <td>{video}</td>
              </tr>
            )
          })}
          </tbody>
        </table>

      </>
    );
  }

  return (
    <HTML>
      <div class={"flex flex-col gap-3 p-5 items-start"}>
        <h1>Récap des videos</h1>
        <p>Nombre de videos : {nbsVideo()}</p>
        <a class={"p-2 bg-blue-500 rounded-xl hover:bg-blue-300 cursor-pointer"} href={"/admin/screen/bigScreen"}>Afficher l'écan</a>
        <p>{videoName()}</p>
      </div>
    </HTML>
  )
}
