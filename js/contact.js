/**
 * Contact Form Validation & Feedback — KAVYASHREE D Portfolio
 * Client-side validation with accessible status messages
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (!contactForm || !formStatus) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Reset status
    formStatus.className = 'form-status';
    formStatus.style.display = 'none';

    // Validation
    if (!name || !email || !subject || !message) {
      formStatus.textContent = 'Please fill out all required fields before submitting.';
      formStatus.classList.add('error');
      formStatus.style.display = 'block';
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formStatus.textContent = 'Please provide a valid email address.';
      formStatus.classList.add('error');
      formStatus.style.display = 'block';
      return;
    }

    // Direct feedback without claiming email delivery
    formStatus.innerHTML = `<strong>Thank you, ${name}!</strong> Your message has been prepared. For direct communication, you can also email me directly at <a href="mailto:kavyashreed44@gmail.com" style="color: #38BDF8; text-decoration: underline;">kavyashreed44@gmail.com</a>.`;
    formStatus.classList.add('success');
    formStatus.style.display = 'block';

    contactForm.reset();
  });
});
