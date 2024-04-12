import {HTML} from "#resources/views/pages/Components/HTML";
import {notReact} from "#resources/views/pages/Components/utils/notReact";
import env from "#start/env";
import clsx from "clsx";

export default function BigScreen() {
  const completeHost = `${env.get('APIHOST')}:${env.get('PORT')}`
  const [visible, setVisible] = notReact.useState(true);
  const [isFinished, setIsFinished] = notReact.useState(false);
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow"
  };

  async function videoName() {
    let resultList: Array<string> = [];
    await fetch(`http://${completeHost}/admin/getVideosList`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        resultList = JSON.parse(result) as Array<string>
      })
      .catch((error) => console.error(error));
    return (
      <div class={"w-screen h-screen flex flex-wrap flex-row content-start justify-center"}>
        {resultList.map((video) => {
          return (
            <video class={"screen"} src={"http://content.rdd.silvus.me/" + video}></video>
          )
        })}
      </div>
    );
  }

  async function bigVideo() {
    let resultList: Array<string> = [];
    let video: string;
    await fetch(`http://${completeHost}/admin/getVideosList`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        resultList = JSON.parse(result) as Array<string>
        video = resultList[0];
      })
      .catch((error) => console.error(error));
    return (
      <div id={"bigScreenBack"}
        class={"backdrop-blur absolute w-screen h-screen z-20 flex justify-center items-center"}
      >
        <video
          id={"bigScreen"}
          class={"bigScreen absolute"}
          src={"http://content.rdd.silvus.me/" + video}
        />

      </div>
    )
  }

  return (
    <HTML>
      <div>
        {bigVideo()}
        {videoName()}
      </div>
    </HTML>
  )
}
