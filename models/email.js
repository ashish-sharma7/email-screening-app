const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  senderName: String,
  emailId: String,
  emailBody: String,
  receivedTime: Date
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
