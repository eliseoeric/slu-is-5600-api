// db.js
const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://eliseoeric:NxNfSs6jGegIdrXy@cluster0.ldjvhnz.mongodb.net/?retryWrites=true&w=majority', // Note you'll need to put in your own credentials here
  {
    useNewUrlParser: true,
  }
)

module.exports = mongoose