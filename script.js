 /* Place your JavaScript in this file */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Display success message
    alert('Thanks for reaching out! We’ll get back to you shortly.');

    // Optionally reset the form
    form.reset();
  });
});
