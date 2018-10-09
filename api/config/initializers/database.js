import mysql from 'mysql'
import config from '../config'

import log from '../../src/helpers/log'

const connection = mysql.createConnection({
  host     : config.db.host,
  user     : config.db.user,
  password : config.db.password,
  database : config.db.database,
  charset  : 'utf8mb4'
})

connection.connect(err => (!err)
  ? log.msg('🗄', `Connexion faite à la base de donnée : ${config.db.database}.`)
  : log.error('Erreur MySQL'))

export default connection
