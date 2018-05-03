import config from "../../../config/config";

import project from "../model/project";

const projects = {
    read: (req, res) => project.getAll((result) => res.json(result))
}

export default projects