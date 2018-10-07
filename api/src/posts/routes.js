import { Router } from 'express'

import post from './actions/posts'

const router = Router()

router.route('/posts')
  .get(post.read)

router.route('/posts/:uuid')
  .get(post.read)

export default router
