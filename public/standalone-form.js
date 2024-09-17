(function() {
  // Simple function to create elements with attributes
  function createElement(tag, attrs = {}) {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      el.setAttribute(key, value);
    }
    return el;
  }

  // Sanitization function
  function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }

  // Create and append the form
  function createForm() {
    const form = createElement('form', { id: 'rental-request-form', class: 'space-y-4' });
    form.innerHTML = `
      <input type="text" name="firstName" placeholder="First Name" required>
      <input type="text" name="lastName" placeholder="Last Name" required>
      <input type="email" name="email" placeholder="Email" required>
      <input type="tel" name="phone" placeholder="Phone" required>
      <select name="knowRampLength">
        <option value="">Do you know the ramp length needed?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <input type="text" name="estimatedRampLength" placeholder="Estimated Ramp Length">
      <select name="knowRentalDuration">
        <option value="">Do you know the rental duration?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <input type="text" name="estimatedRentalDuration" placeholder="Estimated Rental Duration">
      <input type="text" name="installationTimeframe" placeholder="Installation Timeframe">
      <input type="text" name="mobilityAids" placeholder="Mobility Aids">
      <input type="text" name="installAddress" placeholder="Installation Address">
      <button type="submit">Submit Request</button>
    `;
    return form;
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Sanitize inputs
    for (let key in data) {
      if (typeof data[key] === 'string') {
        data[key] = sanitizeInput(data[key]);
      }
    }

    fetch('https://app.samedayramps.com/api/rental-requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(() => {
      form.innerHTML = '<p>Thank you for your submission!</p>';
    })
    .catch(error => {
      console.error('Error:', error);
      form.innerHTML += '<p>An error occurred. Please try again later.</p>';
    });
  }

  // Initialize the form
  function init() {
    const container = document.getElementById('rental-request-form-root');
    if (!container) {
      console.error('Container element not found');
      return;
    }

    const form = createForm();
    container.appendChild(form);
    form.addEventListener('submit', handleSubmit);
  }

  // Run initialization when the DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();