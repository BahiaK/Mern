const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://khaled:Uf6HeMTQvrVT7b0b@cluster0.hfyqi5t.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})

