import uuid from 'uuid'
import config from "../../../config/config"
import database from "../../../config/initializers/database"

const table = "socials"

const social = {
  get: cb => {
    database.query(`SELECT * FROM ${table}`, (error, result) => {
      if(error) throw error

      cb(result)
    })
  }
}

export default social
