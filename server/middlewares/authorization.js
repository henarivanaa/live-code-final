const { Report } = require('../models')

const authorization = async (req, res, next) => {
  const { id } = req.params
  const UserId = req.userData.id
  const report = await Report.findOne({ where: { id } })
  if (report) {
    if (report.UserId === UserId) {
      next()
    } else {
      next(
        {
          status: 403,
          message: 'You are not authorized'
        }
      )
    }
  } else {
    next(
      {
        status: 404,
        message: 'Data not found'
      }
    )
  }
}

module.exports = authorization