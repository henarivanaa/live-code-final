const { verifyToken } = require('../helpers/jwt')

const authentication = (req, res, next) => {
  try {
    let { token } = req.headers
    req.userData = verifyToken(token)
    next()
  } catch (err) {
    next(
      {
        status: 403,
        message: 'You need to login first!'
      }
    )
  }
}

module.exports = authentication