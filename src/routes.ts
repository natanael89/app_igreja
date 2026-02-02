import * as express from 'express'
import { categoriesController } from './controllers/categories.controller'
import { dailyPostController } from './controllers/dailyPost.controller'
import { videoController } from './controllers/video.controller'
import { favoritesController } from './controllers/favorites.Controller'
import { authController } from './controllers/auth.controller'
import { ensureAuth } from './middlewares/auth'
import { likesController } from './controllers/likes.controller'
import { usersController } from './controllers/users.controller'


const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/categories', ensureAuth, categoriesController.index)
router.get('/categories/:id', ensureAuth, categoriesController.show)

router.get('/daily-posts', dailyPostController.index)
router.get('/daily-posts/featured', dailyPostController.featured)
router.get('/daily-posts/popular', dailyPostController.popular)
router.get('/daily-posts/search', dailyPostController.search)
router.get('/daily-posts/:id', dailyPostController.show)

router.get('/video', ensureAuth, videoController.index)
router.get('/video/info/:id', ensureAuth, videoController.show)
router.get('/video/:id', ensureAuth, videoController.show)

router.get('/favorites', ensureAuth, favoritesController.index)
router.post('/favorites', ensureAuth, favoritesController.save)
router.delete('/favorites/:id', ensureAuth, favoritesController.delete)

router.post('/likes', ensureAuth, likesController.save)
router.delete('/likes/:id', ensureAuth, likesController.delete)

router.get('/users/current/watching', ensureAuth, usersController.watching)
router.get('/users/current', ensureAuth, usersController.show)
router.put('/users/current', ensureAuth, usersController.update)
router.put('/users/current/password', ensureAuth, usersController.updatePassword)

export { router }