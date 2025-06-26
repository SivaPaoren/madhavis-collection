// No import statement needed now

(function () {
  emailjs.init('QG5XAQgeQfIfi5OOY'); // ✅ Your public key

  const form = document.getElementById('contactForm');
  const submitBtn = form.querySelector('button');
  const formMessage = document.getElementById('formMessage');

  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formMessage.style.display = 'none';

    emailjs.sendForm('service_2axq0pe', 'template_nojl8nd', form)
      .then(() => {
        formMessage.textContent = '✅ Thank you! Your message has been sent.';
        formMessage.style.color = 'green';
        formMessage.style.display = 'block';
        form.reset();
      })
      .catch((error) => {
        formMessage.textContent = '❌ Oops! Something went wrong. Please try again.';
        formMessage.style.color = 'red';
        formMessage.style.display = 'block';
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      });
  });
})();
