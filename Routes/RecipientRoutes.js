const express = require('express');
const router = express.Router();
const recipientController = require('../controller/RecipientController');


router.get('/api/recipients', recipientController.getAllRecipients);
router.get('/api/recipients/:id', recipientController.getSingleRecipient);

router.post('/api/recipient', recipientController.addNewRecipient)

router.put('/api/recipient', recipientController.updateRecipient)

router.delete('/api/recipient/:id', recipientController.deleteRecipient)



module.exports = router;