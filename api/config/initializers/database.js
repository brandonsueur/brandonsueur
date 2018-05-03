// app
import mysql from 'mysql'
import config from '../config'

import debug from '../../src/helpers/debug'

const connection = mysql.createConnection({
    host     : config.db.host,
    user     : config.db.user,
    password : config.db.password,
    database : config.db.database
})

connection.connect(err => (!err)
    ? debug.msg('🗄', `Connexion faite à la base de donnée : ${config.db.database}.`)
    : debug.msg('🚨', `Impossible de ce connecter à la base de donnée : ${config.db.database}.`)
)

export default connection
