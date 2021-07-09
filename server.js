const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
require('dotenv').config();

const url = process.env.DB_URL;

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('short'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const Routes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/api/workoutRoutes')

app.use('/', Routes);
app.use('/api', apiRoutes);

mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}...`)
    });
})