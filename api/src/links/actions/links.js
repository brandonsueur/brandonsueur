import config from "../../../config/config";

import link from "../model/link";

const links = {
    read: (req, res) => link.getAll((result) => res.json(result))
}

export default links