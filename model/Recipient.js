const mongoose = require('mongoose');

const recipientSchema = {
    recipientId: { type: Number, required: true },
    name: { type: String, required: true },
    bloodType: { type: String, required: true },
    age: { type: Number, required: true },
    contactNumber: { type: String, required: true },
    
};

module.exports = mongoose.model("Recipient", recipientSchema);
