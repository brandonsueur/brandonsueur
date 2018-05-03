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
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'portfolio',
        port: 3306
    }

}

export default config
