import {HTML} from "#resources/views/pages/Components/HTML";
import env from "#start/env";

export default function ShowVideos() {
  const completeHost = `${env.get('HOST')}:${env.get('PORT')}`
  const myHeaders = new Headers();
  myHeaders.append("Cookie", "adonis-session=s%3AeyJtZXNzYWdlIjoiZ21ocnNyZzkxcGgwcHJvOTE4enZiaWZvIiwicHVycG9zZSI6ImFkb25pcy1zZXNzaW9uIn0.G2YT8vZ1580RQi0pjmrhWPrZ9lb76a7DJIssRGOsND4");

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  async function nbsVideo() {
    let resultNumber;
    await fetch(`http://${completeHost}/admin/nbsVideos`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        resultNumber = result
      })
      .catch((error) => console.error(error));
    return resultNumber;
  }

  async function videoName() {
    let resultList: Array<string>;
    await fetch(`http://${completeHost}/admin/getVideosList`, requestOptions)
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
        <a class={"p-2 bg-blue-500 rounded-xl hover:bg-blue-300 cursor-pointer"}>Afficher l'écan</a>
        <p>{videoName()}</p>
      </div>
    </HTML>
  )
}
