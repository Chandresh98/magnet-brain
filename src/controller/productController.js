const productModel = require('../model/productModel')
const validator = require('../middleware/validator')


const createProduct = async (req, res) => {
    try {
        const data = req.body

        if (Object.keys(data).length === 0){ 
            return res.status(400).send({ status: false, message: "Please enter Data in body" }) 
        }

        const { name, description, price} = data

        if (!validator.isValid(name)) {
            return res.status(400).send({ status: false, message: "enter name...it is required" })
        }

        const prevName = await productModel.findOne({ name: name })
        
        if (prevName) {
            return res.status(400).send({ status: false, message: "Title is already exist...use another one " })
        }
    
        if (!validator.isValid(description)) {
            return res.status(400).send({ status: false, message: "enter description...it is required" })
        }


        if (!validator.isValid(price)) {
            return res.status(400).send({ status: false, message: "enter price...it is required" })
        }
        
        if (isNaN(price)) {

            return res.status(400).send({ status: false, message: "enter price...it should be number/decimal form" })
        }
        if (price < 1) {
            return res.status(400).send({ status: false, message: "please enter valid price" })
        }

        const createProduct = await productModel.create(data)
        return res.status(201).send({ status: true, message: "product created successfully", data: createProduct })

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })

    }

}


module.exports.createProduct=createProduct