import { Router } from 'express'

import socials from './actions/socials'

const router = Router()

router.route('/socials')
  .get(socials.readAll)

export default router
