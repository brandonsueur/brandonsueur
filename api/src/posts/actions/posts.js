import config from "../../../config/config";

import post from "../model/post";

const posts = {
    read: (req, res) => post.getAll((result) => res.json(result))
}

export default posts