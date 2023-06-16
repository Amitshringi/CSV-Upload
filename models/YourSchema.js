const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  // Define your schema fields here
  // For example:
  name: String,
  age: Number,
  // Add more fields as needed
});

module.exports = mongoose.model('YourSchema', yourSchema);
