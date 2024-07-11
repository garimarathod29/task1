const footers = document.getElementsByClassName('card-footer');

for (let i = 0; i < footers.length; i++) {
  footers[i].addEventListener('click', function() {
    const recipient = document.getElementById('recipient').value;
    const account = document.getElementById('account').value;
    const amount = document.getElementById('amount').value;

    if (recipient && account && amount) {
      console.log('Recipient:', recipient);
      console.log('Account Number:', account);
      console.log('Amount:', amount);
      alert('Transfer Successful!');
    } else {
      alert('Please fill in all fields.');
    }
  });
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});