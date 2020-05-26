const Car = require('../models/Cars')

class CarsController {

    constructor(dao){
        this.dao = dao
        //this.index = this.index.bind(this)
    }

    index = async (req, res) =>{
        const cars = await this.dao.find()
        return res.json(cars)
    }

    create = async (req, res) => {
        const cars = await this.dao.create(req.body)
        return res.status(201).json(cars)
    }
}
module.exports = new CarsController(Car);