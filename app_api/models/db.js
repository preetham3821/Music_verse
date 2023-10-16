const mongoose = require('mongoose');
require('dotenv').config();


const dbURI = 'mongodb+srv://preetham:38213821@cluster0.biiqqxg.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true})