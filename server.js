const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/HealthyDB';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || url, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const Routes = require('./routes/routeshtml')
const apiRoutes = require('./routes/api')

app.use('/', Routes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`)
});