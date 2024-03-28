// import type { HttpContext } from '@adonisjs/core/http'

import * as fs from "fs";

export default class videosController {
  public getVideos() {
    const dir: string = 'public/videos'
    const files: string[] = []
    const fileList = fs.readdirSync(dir)
    fileList.forEach(file => {
      files.push(file)
    })
    return files
  }

  public getNbsVideos() {
    const dir: string = 'public/videos'
    const fileList = fs.readdirSync(dir)
    return fileList.length
  }
}
