import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetch('/api/emails')
      .then(response => response.json())
      .then(data => {
        setEmails(data);
      })
      .catch(error => console.error('Error fetching emails:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Email Screening App</h1>
      </header>
      <div className="email-list">
        {emails.map(email => (
          <div key={email._id} className="email-item">
            <p>Sender: {email.senderName}</p>
            <p>Email: {email.emailId}</p>
            <p>Body: {email.emailBody}</p>
            <p>Received: {new Date(email.receivedTime).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
