const Recipient = require('../model/Recipient');

exports.getAllRecipients = async (req, res) => {
    try {
        const recipients = await Recipient.find();
        res.json(recipients);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

exports.getSingleRecipient = async (req, res) => {
    try {
        const recipient = await Recipient.findOne({ recipientId: req.params.id });
        if (!recipient) {
            return res.status(404).json({ msg: 'Recipient Not Found' });
        }
        res.json(recipient);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

exports.addNewRecipient = async(req, res) =>{
    try{
        const recipient = await Recipient.findOne({recipientId: req.body.recipientId})
        if(!recipient){
            const addedRecipient = await Recipient.create(req.body)
            res.json(addedRecipient)
        }
        else{
            res.json({msg: 'Recipient already exixts'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}


exports.updateRecipient = async (req, res) =>{
    try{
        const recipient = req.body
        const fetchedRecipient = await Recipient.findOne({recipientId: recipient.recipientId})
        if(fetchedRecipient){
            await Recipient.updateOne(recipient)
            res.json(await Recipient.findOne({recipientId: recipient.recipientId}))
        }
        else{
            res.json({msg: 'Recipient doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}


exports.deleteRecipient = async (req, res)=>{
    try{
        const recipient = await Recipient.findOne({recipientId: req.params.id})
        if(recipient){
            await Recipient.deleteOne({recipientId:  recipient.recipientId})
            res.json(recipient)
        }
        else{
            res.json({msg: 'Recipient doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}