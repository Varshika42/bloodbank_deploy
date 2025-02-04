const express = require('express');
const app = express();
const mongoose = require('mongoose');
const donorRouter = require('./Routes/DonorRoutes');
const recipientRouter = require('./Routes/RecipientRoutes');
const hospitalRouter = require('./Routes/HospitalRoutes');


app.use(express.json());

app.use(donorRouter);
app.use(recipientRouter);
app.use(hospitalRouter);


app.listen(5000, () => console.log('Server running on port 5000'));

mongoose.connect('mongodb://localhost:27017/Bloodbank')
    .then(() => console.log('Database connected...'))
    .catch((err) => console.log(err));




