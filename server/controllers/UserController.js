const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static async login (req, res, next) {
    const { username, password } = req.body
    let user = await User.findOne({ where: { username } })
    if (!user) {
      next(
        {
          status: 400,
          message: 'Wrong email / password'
        }
        )
        return false
      }
    if (user.password !== password) {    
      next(
        {
          status: 400,
          message: 'Wrong email / password'
        }
      )
      return false
    } 

    let token = generateToken({ id: user.id, username: user.username })
    res.status(200).json({ token, id: user.id, username: user.username })
  }
}

module.exports = UserController