import { Router } from 'express'

import posts from './actions/posts'

const router = Router()

router.route('/posts')
  .get(posts.readAll)

router.route('/posts/:slug')
  .get(posts.read)

export default router
