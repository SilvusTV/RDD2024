import {HTML} from "#resources/views/pages/Components/HTML";
import env from "#start/env";
import {document, Document} from "postcss";

export default function BigScreen() {
  const completeHost = `${env.get('HOST')}:${env.get('PORT')}`
  const myHeaders = new Headers();
  myHeaders.append("Cookie", "adonis-session=s%3AeyJtZXNzYWdlIjoiZ21ocnNyZzkxcGgwcHJvOTE4enZiaWZvIiwicHVycG9zZSI6ImFkb25pcy1zZXNzaW9uIn0.G2YT8vZ1580RQi0pjmrhWPrZ9lb76a7DJIssRGOsND4");
  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  async function videoName() {
    let resultList: Array<string>;
    await fetch(`http://${completeHost}/admin/getVideosList`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        resultList = JSON.parse(result) as Array<string>
      })
      .catch((error) => console.error(error));
    return (
      <div class={"flex"}>
        {resultList.map((video) => {
          return (
            <video src={"http://content.rdd.silvus.me/"+video} height={"216"} width={"384"} ></video>
          )
        })}
      </div>
    );
  }

  return (
    <HTML>
      <div>
        {videoName()}
      </div>
    </HTML>
  )
}
