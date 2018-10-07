const { getPosts, getUser } = require('medium-posts')


// latest 10 posts by hobochild
getPosts('brandonsueur', 10).then(console.log)

// get basic user info
getUser('brandonsueur').then(console.log)

const posts = {
  read: (req, res) => {
    user.findOneByUUID([req.user.uuid], result => {
      if(!result.length > 0){
        res.status(404).json({
          code: 404,
          message: `L'utilisateur n'a pas été trouvé.`
        })
      } else {
        res.status(200).json({
          code: 200,
          auth: true,
          user: result[0]
        })
      }
    })
  }
}

export default posts
