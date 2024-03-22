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

router.get('/', () => {
  return <Home/>
})
router.get('/record', () => {
  return <Record/>
})