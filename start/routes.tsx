/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import Home from '#resources/views/pages/Home'
import {Record} from "#resources/views/pages/Record";
import SendVideosController from "#controllers/send_videos_controller";
import ShowVideos from "#resources/views/pages/Admin/ShowVideos";
import videosController from "#controllers/videos_controller";

router.get('/', () => {
  return <Home/>
})
router.get('/record', () => {
  return <Record/>
})
router.get('admin/screen/showVideos', ()=>{
  return <ShowVideos/>
})

router.get('/admin/getVideosList',[videosController, 'getVideos'] )
router.get('/admin/nbsVideos',[videosController, 'getNbsVideos'] )
router.post('/send', [SendVideosController, 'upload'])
