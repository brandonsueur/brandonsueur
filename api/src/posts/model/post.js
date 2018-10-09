import uuid from 'uuid'
import config from "../../../config/config"
import database from "../../../config/initializers/database"

const table = "posts"

const post = {
  get: cb => {
    database.query(`SELECT * FROM ${table}`, (error, result) => {
      if(error) throw error

      cb(result)
    })
  },

  findOneBySLUG: (data, cb) => {
    database.query(`SELECT * FROM ${table} WHERE slug = ? LIMIT 1`, data, (error, result) => {
        if(error) throw error

        if (result.length === 0) {
            cb([])
        } else {
            cb(result)
        }
    })
  },

  doesThisExist: (data, cb) => {
    database.query(`SELECT uuid FROM ${table} WHERE ?? = ? LIMIT 1`, data, (error, result) => {
        if (error) throw error

        if (result.length === 0) {
            cb(false)
        } else {
            cb(true)
        }
    })
  }
}

export default post
