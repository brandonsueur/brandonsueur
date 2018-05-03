import nconf from 'nconf'
import {} from 'dotenv/config'

import config_dev from './env/development'
import config_prod from './env/production'

nconf.use('memory')
nconf.argv()
nconf.env()

const checkEnv = (nconf.get('NODE_ENV') == 'production')
const config = (checkEnv) ? config_prod : config_dev

export default config