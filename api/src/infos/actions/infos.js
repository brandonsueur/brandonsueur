import config from "../../../config/config";

import info from "../model/info";

const infos = {
    read: (req, res) => info.getAll((result) => res.json(result))

}

export default infos
