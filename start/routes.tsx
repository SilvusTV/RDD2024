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
import { Record } from '#resources/views/pages/Record'

const SendVideosController = () => import('#controllers/send_videos_controller')
import ShowVideos from '#resources/views/pages/Admin/ShowVideos'

const videosController = () => import('#controllers/videos_controller')
import BigScreen from '#resources/views/pages/Admin/BigScreen'

router.get('/', () => {
  return <Home />
})
router.get('/record', () => {
  return <Record />
})
router.get('admin/screen/showVideos', () => {
  return <ShowVideos />
})
router.get('admin/screen/bigScreen', () => {
  return <BigScreen />
})
router.get('/admin/getVideosList', [videosController, 'getVideos'])
router.get('/admin/nbsVideos', [videosController, 'getNbsVideos'])
router.post('/send', [SendVideosController, 'upload'])
router.post('/remove', [SendVideosController, 'update'])
