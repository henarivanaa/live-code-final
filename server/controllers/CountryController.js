const { Country } = require('../models')

class CountryController {
  static async getAll(req, res, next) {
    try {
      let countries = await Country.findAll()
      res.status(200).json(countries)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CountryController