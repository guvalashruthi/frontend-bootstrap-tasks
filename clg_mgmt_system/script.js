document.addEventListener('DOMContentLoaded', function () {
  highlightNavLink();
  initRegistrationForm();
  initContactForm();
});

function highlightNavLink() {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav .nav-link').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

function showAlert(element, message, type) {
  if (!element) return;
  element.textContent = message;
  element.classList.remove('d-none', 'alert-danger', 'alert-success', 'alert-warning');
  element.classList.add('alert', `alert-${type}`);
}

function initRegistrationForm() {
  const form = document.getElementById('registrationForm');
  const alertBox = document.getElementById('successAlert');
  if (!form || !alertBox) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      showAlert(alertBox, 'Please fix the highlighted fields to continue.', 'warning');
      return;
    }
    const name = document.getElementById('studentName').value.trim();
    const eventName = document.getElementById('eventSelection').value;
    showAlert(alertBox, `Success! ${name} is registered for ${eventName}.`, 'success');
    form.reset();
    form.classList.remove('was-validated');
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('contactAlert');
  if (!form || !alertBox) return; 

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      showAlert(alertBox, 'Please complete all required fields before sending your message.', 'warning');
      return;
    }
    showAlert(alertBox, 'Thank you! Your message has been sent successfully.', 'success');
    form.reset();
    form.classList.remove('was-validated');
  });
}
