import post from "../model/post"

const posts = {
  readAll: (req, res) => {
    post.get(results => {
      res.status(200).json({
        code: 200,
        posts: results
      })
    })
  },

  read: (req, res) => {
    post.findOneByUUID([req.params.uuid], result => {
      res.status(200).json({
        code: 200,
        post: result
      })
    })
  }
}

export default posts
