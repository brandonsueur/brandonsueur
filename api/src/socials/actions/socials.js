import social from "../model/social"

const socials = {
  readAll: (req, res) => {
    social.get(result => {
      res.status(200).json({
        code: 200,
        socials: result
      })
    })
  }
}

export default socials
