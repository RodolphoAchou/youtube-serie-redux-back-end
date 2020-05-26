const router = require('express').Router();

const carsController = require('../controllers/CarsControler');

router.get('/cars', carsController.index);
router.post('/cars', carsController.create);

module.exports = router;