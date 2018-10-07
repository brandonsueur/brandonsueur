import jwt from 'jsonwebtoken'

import config from '../../config/config'

const encode = user => jwt.sign(user, config.app.secret, { expiresIn: 86400 })
const decode = token => jwt.verify(token, config.app.secret)

export {
  encode,
  decode
}
