const mongoose = require('mongoose');

const hospitalSchema = {
    hospitalId: { type: Number, required: true },
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    
};

module.exports = mongoose.model("Hospital", hospitalSchema);
