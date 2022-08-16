const express = require('express')
const router = express.Router()
const userController = require('./src/controller/userController')
const productController = require('./src/controller/productController')
const salesController = require('./src/controller/salesController')
const middleware = require('./src/middleware/auth')
// User Registration
router.post('/register', userController.registration)
// user Login
router.post('/login',userController.loginUser)
// Register Product
router.post('/products' , productController.createProduct )
// create selling product
router.post('/user/:userId/sales',middleware.authentication, salesController.createSales)
// get top 5 product
router.get('/user/products',middleware.authentication ,salesController.getTopProducts)
// today sales revenew
router.get('/user/:userId/revenew',middleware.authentication, salesController.getRevenew)

module.exports = router