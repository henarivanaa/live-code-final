const router = require('express').Router()
const CountryController = require('../controllers/CountryController')

router.get('/', CountryController.getAll)

module.exports = router