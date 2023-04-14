const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./FormRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

const PORT = 4000;

mongoose.set('strictQuery', false);
mongoose
.connect('mongodb+srv://ekatmoz:fixhQNCVI2KbQF5s@cluster0.9y4o1rk.mongodb.net/?retryWrites=true&w=majority')
.catch((err) => console.log(err)) 

app.use(routes)

app.listen(PORT, () => {
  console.log(`I'am listening at PORT ${PORT}`)
})