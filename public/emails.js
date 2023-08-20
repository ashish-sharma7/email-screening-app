// emails.js

function updateEmailsList(emails) {
  const emailList = document.getElementById('email-list');

  // Clear previous content
  emailList.innerHTML = '';

  // Populate with new data
  emails.forEach(email => {
    const emailCard = document.createElement('div');
    emailCard.classList.add('email-card');

    const sender = document.createElement('h2');
    sender.textContent = email.senderName;

    const emailId = document.createElement('p');
    emailId.textContent = `Email: ${email.emailId}`;

    const body = document.createElement('p');
    body.textContent = `Body: ${email.emailBody}`;

    const received = document.createElement('small');
    received.textContent = `Received: ${email.receivedTime}`;

    emailCard.appendChild(sender);
    emailCard.appendChild(emailId);
    emailCard.appendChild(body);
    emailCard.appendChild(received);

    emailList.appendChild(emailCard);
  });
}

fetch('/api/emails')
  .then(response => response.json())
  .then(data => {
    updateEmailsList(data);
  })
  .catch(error => console.error('Error fetching emails:', error));
