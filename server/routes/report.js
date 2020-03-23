const router = require('express').Router()
const ReportController = require('../controllers/ReportController')
const authorization = require('../middlewares/authorization')

router.get('/', ReportController.getAll)
router.post('/', ReportController.addReport)
router.delete('/:id', authorization, ReportController.deleteReport)

module.exports = router