import { name, description, version } from '../../package.json'

const config = {

    app : {
        name : 'api-portfolio',
        description : description,
        hostname : `http://localhost`,
        version : version,
        port : 3001,
    },

    db : {
        host: '51.38.233.x' ,
        user: 'brandon__s__r',
        password: '',
        database: 'portfolio',
        port: 3306
    }

}

export default config
