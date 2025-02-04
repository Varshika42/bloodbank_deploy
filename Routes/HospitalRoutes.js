const express = require('express');
const router = express.Router();
const hospitalController = require('../controller/HospitalController');


router.get('/api/hospitals', hospitalController.getAllHospitals);
router.get('/api/hospitals/:id', hospitalController.getSingleHospital);

router.post('/api/hospital', hospitalController.addNewHospital)

router.put('/api/hospital', hospitalController.updateHospital)

router.delete('/api/hospital/:id', hospitalController.deleteHospital)

module.exports = router;
