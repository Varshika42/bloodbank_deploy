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

mongoose.connect('mongodb+srv://varshikapalanivel:Varsh24@mycluster.tz14g.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster')
    .then(() => console.log('Database connected...'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Blood Bank Management System Backend is running...');
});




