import uuid from 'uuid';
import config from "../../../config/config";
import database from "../../../config/initializers/database";

const table = "infos";

const info = {
    getAll : (cb) => {
        database.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) throw err;
            
            cb(result);
        });
    }
}

export default info;