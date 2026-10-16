function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
    } else {
      navbar.classList.remove('bg-dark');
    }
  });
}

// Check the form before sending, then show a message instead of reloading the page.
// If the form has no action URL yet (no Formspree form set up), it runs in demo mode.
function handleForms() {
  document.querySelectorAll('.js-form').forEach((form) => {
    const status = form.querySelector('.form-status');
    const button = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      form.classList.add('was-validated');
      status.textContent = '';

      if (!form.checkValidity()) {
        form.querySelector(':invalid').focus();
        return;
      }

      button.disabled = true;

      try {
        if (form.getAttribute('action')) {
          const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { Accept: 'application/json' },
          });
          if (!response.ok) throw new Error('Request failed');
          status.textContent = "Thanks! You're signed up.";
        } else {
          status.textContent = "Thanks! (Demo site: your details weren't sent anywhere.)";
        }
        form.reset();
        form.classList.remove('was-validated');
      } catch (error) {
        status.textContent = 'Sorry, something went wrong. Please try again.';
      } finally {
        button.disabled = false;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  userScroll();
  handleForms();
});
