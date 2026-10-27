(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navWrap = document.querySelector('.nav-wrap');
  if (toggle && navWrap) {
    toggle.addEventListener('click', () => {
      const open = navWrap.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    navWrap.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navWrap.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const concernSelect = document.getElementById('skin-concern-select');
  const recommendation = document.getElementById('recommendation-result');
  if (concernSelect && recommendation) {
    const recommendations = {
      'Acne': ['Face Wash', 'A gentle cleanse can be a simple part of your routine.'],
      'Dryness': ['Moisturizer', 'Moisturizer helps support comfortable, hydrated-feeling skin.'],
      'Sensitivity': ['Moisturizer', 'Choose a gentle, fragrance-free routine where possible.'],
      'Dark Spots': ['Serum', 'A serum may fit into a routine focused on uneven-looking skin tone.'],
      'Aging': ['Serum', 'A serum can be one step in a consistent skincare routine.'],
      'General Skincare': ['Sunscreen SPF 50', 'Daily broad-spectrum sun protection is an important skincare step.']
    };
    const renderRecommendation = () => {
      const choice = recommendations[concernSelect.value];
      if (!choice) {
        recommendation.innerHTML = '<p>Select a concern above to see a suggested product.</p>';
        return;
      }
      recommendation.innerHTML = `<div class="recommendation-copy"><p class="eyebrow">Suggested for you</p><h3>${choice[0]}</h3><p>${choice[1]}</p></div>`;
    };
    concernSelect.addEventListener('change', renderRecommendation);
    renderRecommendation();
  }

  // The Join GlowCare form submits natively to Salesforce Web-to-Lead.
  // Do not prevent its submit event here, or Salesforce will not receive the lead.

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const message = document.getElementById('contact-form-message');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      message.textContent = 'Thank you for your message. This demo form is not connected to an inbox yet. Please email sales@glowcare.com directly.';
      message.className = 'form-message success';
      contactForm.reset();
    });
  }
})();
