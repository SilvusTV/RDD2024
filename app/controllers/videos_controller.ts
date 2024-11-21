// import type { HttpContext } from '@adonisjs/core/http'

import * as fs from 'node:fs'

export default class VideosController {
  getVideos() {
    const dir: string = 'public/videos'
    const files: string[] = []
    const fileList = fs.readdirSync(dir)
    fileList.forEach((file) => {
      files.push(file)
    })
    return files
  }

  getNbsVideos() {
    const dir: string = 'public/videos'
    const fileList = fs.readdirSync(dir)
    return fileList.length - 1
  }
}
