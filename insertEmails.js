const mongoose = require('mongoose');
const Email = require('./models/email'); // Update the path to your Email model

mongoose.connect('mongodb+srv://grubbyrival:acmihScPU7bHWp0w@cluster0.6atovlz.mongodb.net/mailsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');

    const emailsToInsert = [
      {
        senderName: 'Alice Johnson',
        emailId: 'alice@email.com',
        emailBody: "Hello, I hope you're doing well!",
        receivedTime: new Date('2023-08-20T10:30:00Z')
      },
      {
        senderName: 'Bob Smith',
        emailId: 'bob@email.com',
        emailBody: 'Hey there, just checking in!',
        receivedTime: new Date('2023-08-20T11:15:00Z')
      },
      {
        senderName: 'Charlie Brown',
        emailId: 'charlie@email.com',
        emailBody: 'Hi, remember to review the project proposal.',
        receivedTime: new Date('2023-08-20T12:00:00Z')
      },
      {
        senderName: 'Peter White',
        emailId: 'peter@proton.com',
        emailBody: 'Hello, I have an important announcement to make.',
        receivedTime: new Date('2023-08-21T17:45:00Z')
      },
      {
        senderName: 'Quinn Davis',
        emailId: 'quinn@email.com',
        emailBody: "Hi, let's discuss the upcoming conference.",
        receivedTime: new Date('2023-08-21T19:00:00Z')
      },
      {
        senderName: 'Rachel Taylor',
        emailId: 'rachel@proton.com',
        emailBody: 'Hey, we need to review the project budget.',
        receivedTime: new Date('2023-08-21T20:15:00Z')
      }
    ];

    // Insert the data into the 'mails' collection in 'mailsDB'
    Email.insertMany(emailsToInsert)
      .then(result => {
        console.log(`${result.insertedCount} emails inserted`);
        mongoose.connection.close(); // Close the MongoDB connection
      })
      .catch(error => {
        console.error('Error inserting emails:', error);
        mongoose.connection.close(); // Close the MongoDB connection
      });
  })
  .catch(err => {
    console.error('MongoDB Atlas connection error:', err);
  });
