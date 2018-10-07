import { name, description, version } from '../../package.json'

const config = {

  app : {
    name : name,
    description : description,
    hostname : `http://localhost`,
    version : version,
    secret: 'ma-super-cle',
    port : 3000,
  },

  db : {
    host: 'localhost' ,
    user: 'root',
    password: '',
    database: '',
    port: 3306
  }

}

export default config
