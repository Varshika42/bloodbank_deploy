const Hospital = require('../model/Hospital');

exports.getAllHospitals = async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.json(hospitals);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

exports.getSingleHospital = async (req, res) => {
    try {
        const hospital = await Hospital.findOne({ hospitalId: req.params.id });
        if (!hospital) {
            return res.status(404).json({ msg: 'Hospital Not Found' });
        }
        res.json(hospital);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

exports.addNewHospital = async(req, res) =>{
    try{
        const hospital = await Hospital.findOne({hospitalId: req.body.hospitalId})
        if(!hospital){
            const addedhospital = await Hospital.create(req.body)
            res.json(addedHospital)
        }
        else{
            res.json({msg: 'Hospital already exixts'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}


exports.updateHospital = async (req, res) =>{
    try{
        const hospital = req.body
        const fetchedHospital = await Hospital.findOne({recipientId: recipient.recipientId})
        if(fetchedHospital){
            await Hospital.updateOne(hospital)
            res.json(await Hospital.findOne({hospitalId: hospital.hospitalId}))
        }
        else{
            res.json({msg: 'Hospital doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}


exports.deleteHospital = async (req, res)=>{
    try{
        const hospital = await Hospital.findOne({hospitalId: req.params.id})
        if(hospital){
            await Hospital.deleteOne({hospitalId:  hospital.hospitalId})
            res.json(hospital)
        }
        else{
            res.json({msg: 'Hospital doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}