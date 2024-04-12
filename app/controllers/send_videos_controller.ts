import {HttpContext} from "@adonisjs/core/http";
import * as fs from "fs";

export default class SendVideosController {

  upload({request}: HttpContext) {

    const video = request.file('video')
    const dateTime = new Date().toISOString().replace(/:/g, '-')
    video!.move('public/videos', {
      name: `video-${dateTime}.mp4`,
      overwrite: false
    })
  }
  update({request}: HttpContext) {
    let oldSrc = 'public/videos'
    let newSrc = 'public/oldVideos'
    const completeSrc = request.body().src
    const src = completeSrc.split('/').pop()
    fs.rename(oldSrc + '/' + src, newSrc + '/' + src, function (err) {
      if (err){
      console.log(err)
      }
    })
  }

}
