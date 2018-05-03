import { Router } from 'express'

import posts from './actions/posts'

const router = Router()

router
    .route('/')
    .get(posts.read)

export default router