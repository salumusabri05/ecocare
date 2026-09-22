document.addEventListener('DOMContentLoaded', () => {
  // --- Newsletter Form Handling ---
  const newsletterForms = document.querySelectorAll('.newsletterForm');

  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      const submitBtn = form.querySelector('button[type="submit"]');
      const statusMsg = form.nextElementSibling;

      if (!emailInput || !emailInput.value) return;

      // Basic client-side validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        if (statusMsg) {
          statusMsg.textContent = 'Please enter a valid email address.';
          statusMsg.className = 'form-status text-danger mt-2 small';
        }
        return;
      }

      // Simulate submission
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Subscribing...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          emailInput.value = '';

          if (statusMsg) {
            statusMsg.textContent = '✓ Thank you! Subscribed successfully.';
            statusMsg.className = 'form-status text-success mt-2 small fw-bold';

            // Clear message after 4 seconds
            setTimeout(() => {
              statusMsg.textContent = '';
            }, 4000);
          }
        }, 1000);
      }
    });
  });

  // --- Contact Form Handling ---
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const statusMsgContainer = document.getElementById('contactFormStatus');

      // Get required fields
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');
      const privacy = document.getElementById('privacy');

      // Simple validation check
      if (!name.value || !email.value || !subject.value || !message.value || !privacy.checked) {
        return; // Let HTML5 validation handle the UI messages
      }

      // Simulate submission
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          contactForm.reset();

          if (statusMsgContainer) {
            statusMsgContainer.innerHTML = `
              <div class="alert alert-success d-flex align-items-center mb-4" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <div>Thank you! Your message has been sent successfully.</div>
              </div>
            `;

            // Clear message after 5 seconds
            setTimeout(() => {
              statusMsgContainer.innerHTML = '';
            }, 5000);
          }
        }, 1500);
      }
    });
  }

  // --- Animation Observer ---
  // Only play fade-in-up animations when they scroll into view
  const fadeElements = document.querySelectorAll('.fade-in-up');
  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing once it's visible so it doesn't animate again
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
  }

  // --- Scroll to Top Button ---
  const scrollBtn = document.querySelector('.scroll-top-button');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
      } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
      }
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Initial setup
    scrollBtn.style.transition = 'opacity 0.3s, visibility 0.3s';
    scrollBtn.style.opacity = '0';
    scrollBtn.style.visibility = 'hidden';
  }
});
