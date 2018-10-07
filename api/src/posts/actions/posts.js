import post from "../model/post"

const posts = {
  read: (req, res) => {
    post.get(results => {
      res.status(200).json({
        code: 200,
        posts: results
      })
    })
  },
}

export default posts
