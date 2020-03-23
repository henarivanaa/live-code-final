const { Report, Country } = require('../models')

class ReportController {
  static async getAll(req, res, next) {
    try {
      const UserId = req.userData.id
      const reports = await Report.findAll({ where: { UserId } })
      res.status(200).json(reports)
    } catch (err) {
      next(err)
    }
  }

  static async addReport(req, res, next) {
    try {
      const { cases, CountryId } = req.body
      const UserId = req.userData.id
      const created = await Report.create({ cases, CountryId, UserId })

      const country = await Country.findOne({ where: { id: CountryId } })
      const obj = {
        name: country.name,
        deaths: country.deaths,
        recovered: country.recovered,
        cases: country.cases + cases
      }
      await Country.update(obj, { where: { id: CountryId } })

      const report = await Report.findOne({ where: { id: created.id }, include: [ Country ] })
      res.status(201).json(report)
    } catch (err) {
      next(err)
    }
  }

  static async deleteReport(req, res, next) {
    try {
      const { id } = req.params
      let report = await Report.findOne({ where: { id }, include: [ Country ] })
      const deleted = await Report.destroy({ where: { id } })
      if (deleted) {
        const obj = {
          name: report.Country.name,
          deaths: report.Country.deaths,
          recovered: report.Country.recovered,
          cases: report.Country.cases - report.cases
        }
        await Country.update(obj, { where: { id: report.Country.id } })
        const country = await Country.findOne({ where: { id: report.Country.id } })
        res.status(200).json({ country, report: "Successfully delete" })
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ReportController