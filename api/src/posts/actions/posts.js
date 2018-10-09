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
    post.findOneBySLUG([req.params.slug], result => {
      res.status(200).json({
        code: 200,
        post: result
      })
    })
  }
}

export default posts
