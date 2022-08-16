const validator = require('../middleware/validator')
const productModel = require('../model/productModel')
const ProductModel = require('../model/productModel')
const salesModel = require('../model/salesModel')
const userModel = require('../model/userModel')
const moment = require('moment')



const createSales = async function (req, res) {
    try {
        const data = req.body
        const userId = req.params.userId

        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, meassage: "please enter data in body " })
        }

        let findUser = await userModel.findById(userId)
        if (!findUser) {
            return res.status(404).send({ status: false, massage: "user not found" })
        }

        if (!validator.isValidObjectId(userId)) {
            return res.status(400).send({ status: false, message: "Enter valid UserId" })
        }

        const { name, quantity } = data

        if (!validator.isValid(name)) {
            return res.status(400).send({ status: false, massage: "please enter title" })
        }

        let findProduct = await productModel.findOne({ name: name })
        if (!findProduct) {
            return res.status(404).send({ status: false, massage: "Product not found" })
        }


        if (!validator.isValid(quantity)) {
            return res.status(400).send({ status: false, massage: "please enter title" })
        }

        if (isNaN(quantity)) {

            return res.status(400).send({ status: false, message: "enter quantity...it should be number/decimal form" })
        }
        if (quantity < 1) {
            return res.status(400).send({ status: false, message: "please enter valid quantity it should be atleast 1" })
        }
        if (req.decodedToken.UserId == userId) {

            let priceOfProduct = findProduct.price
            let totalPrice = priceOfProduct * quantity

            data.amount = totalPrice

            data.Date = moment().format('L');

            data.userId = userId

            let createSales = await salesModel.create(data)

            return res.status(201).send({ status: true, message: "successful", data: createSales })

        }
        else {
            return res.status(403).send({ status: false, message: "authorizatin denied" })
        }

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


const getTopProducts = async function(req,res){
    try{
        // mapping
         let map = new Map() 
        
         let topProducts = await salesModel.find()

         for(let i=0;i<topProducts.length;i++){
            if(map.get(topProducts[i].name))
            map.set(topProducts[i].name ,map.get(topProducts[i].name) +topProducts[i].quantity )
            else
            map.set(topProducts[i].name,topProducts[i].quantity)
        }
      
        let filter= Object.fromEntries(map)
       // sorting an object
        const sortable = Object.fromEntries(
            Object.entries(filter).sort(([,a],[,b]) => b-a)
        );


        var result = Object.entries(sortable)
       
        let final = []

        for(let i=0;i<5;i++){
          let topProduct = result[i][0]
          let productDetails = await productModel.findOne({name:topProduct})
            final.push(productDetails)
        }
        
         return res.status(200).send({ status: true, message: "successful", data: final })

    }catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


const getRevenew = async function(req,res){
    try{
        const userId = req.params.userId

        if (!validator.isValidObjectId(userId)) {
            return res.status(400).send({ status: false, message: "Enter valid UserId" })
        }

        if (req.decodedToken.UserId == userId){
        let todayDate = moment().format('L')

        let salesOftoday = await salesModel.find({Date:todayDate})

        let totalRevenew = 0

        for(let i=0;i<salesOftoday.length;i++){
            totalRevenew=totalRevenew + salesOftoday[i].amount
        }

        return res.status(200).send({ status: true, message: "successful",Today_Product_Sale:salesOftoday.length ,Today_Sales_Revenew: totalRevenew })
    } else {
        return res.status(403).send({ status: false, message: "authorizatin denied" })
    }
    }catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports.createSales = createSales
module.exports.getTopProducts=getTopProducts
module.exports.getRevenew = getRevenew