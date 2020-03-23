const router = require('express').Router()
const countryRoutes = require('./country')
const userRoutes = require('./user')
const reportRoutes = require('./report')
const authentication = require('../middlewares/authentication')

router.use('/', userRoutes)
router.use(authentication)
router.use('/countries', countryRoutes)
router.use('/reports', reportRoutes)

module.exports = router