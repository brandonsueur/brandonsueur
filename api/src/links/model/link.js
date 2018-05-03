import uuid from 'uuid';
import config from "../../../config/config";
import database from "../../../config/initializers/database";

const table = "links";

const project = {
    getAll : (cb) => {
        database.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) throw err;
            
            cb(result);
        });
    }
}

export default project;