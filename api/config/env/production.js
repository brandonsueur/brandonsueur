import { name, description, version } from '../../package.json'

const config = {

    app : {
        name : 'api-portfolio',
        description : description,
        hostname : `http://localhost`,
        version : version,
        port : 8000,
    },
    
    db : {
        host: 'localhost' ,
        user: 'brandon__s__r',
        password: '',
        database: 'gity',
        port: 3306
    }

}

export default config