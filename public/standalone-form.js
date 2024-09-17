(function() {
  // Create and inject CSS
  const style = document.createElement('style');
  style.textContent = `
    #rental-request-form {
      font-family: Arial, sans-serif;
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    #rental-request-form input,
    #rental-request-form select,
    #rental-request-form button {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    #rental-request-form button {
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }
    #rental-request-form button:hover {
      background-color: #45a049;
    }
    .error {
      color: red;
      font-size: 0.8em;
    }
  `;
  document.head.appendChild(style);

  // Create form HTML
  const createContactInfoForm = () => `
    <h2>Contact Information</h2>
    <input type="text" name="firstName" placeholder="First Name" required>
    <div class="error" id="firstName-error"></div>
    <input type="text" name="lastName" placeholder="Last Name" required>
    <div class="error" id="lastName-error"></div>
    <input type="email" name="email" placeholder="Email" required>
    <div class="error" id="email-error"></div>
    <input type="tel" name="phone" placeholder="Phone" required>
    <div class="error" id="phone-error"></div>
    <button type="button" id="next-button">Next</button>
  `;

  const createRampDetailsForm = () => `
    <h2>Ramp Details</h2>
    <div>
      <label>Do you know the length of ramp you need?</label>
      <input type="radio" name="knowRampLength" value="yes" required> Yes
      <input type="radio" name="knowRampLength" value="no" required> No
    </div>
    <div class="error" id="knowRampLength-error"></div>
    <input type="text" name="estimatedRampLength" placeholder="Estimated Ramp Length">
    <div class="error" id="estimatedRampLength-error"></div>
    <div>
      <label>Do you know how long you need the ramp?</label>
      <input type="radio" name="knowRentalDuration" value="yes" required> Yes
      <input type="radio" name="knowRentalDuration" value="no" required> No
    </div>
    <div class="error" id="knowRentalDuration-error"></div>
    <input type="text" name="estimatedRentalDuration" placeholder="Estimated Rental Duration">
    <div class="error" id="estimatedRentalDuration-error"></div>
    <select name="installationTimeframe" required>
      <option value="">How soon do you need the ramp installed?</option>
      <option value="Within 24 hours">Within 24 hours</option>
      <option value="Within 2-3 days">Within 2-3 days</option>
      <option value="Within 1 week">Within 1 week</option>
      <option value="Within 2 weeks">Within 2 weeks</option>
      <option value="More than 2 weeks">More than 2 weeks</option>
    </select>
    <div class="error" id="installationTimeframe-error"></div>
    <div>
      <label>Mobility Aids (select any that apply)</label><br>
      <input type="checkbox" name="mobilityAids" value="Wheelchair"> Wheelchair<br>
      <input type="checkbox" name="mobilityAids" value="Motorized scooter"> Motorized scooter<br>
      <input type="checkbox" name="mobilityAids" value="Walker"> Walker
    </div>
    <div class="error" id="mobilityAids-error"></div>
    <div>
      <label for="installAddress">Installation Address</label>
      <input type="text" id="installAddress" name="installAddress" placeholder="Start typing your address" required>
    </div>
    <div class="error" id="installAddress-error"></div>
    <button type="button" id="prev-button">Previous</button>
    <button type="submit">Submit Request</button>
  `;

  const createConfirmationPage = () => `
    <h2>Thank You!</h2>
    <p>Your rental request has been successfully submitted. We appreciate your interest in our wheelchair ramp rental service.</p>
    <p>Our team will review your request and reach out to you shortly with more information and next steps.</p>
    <p>If you have any immediate questions or concerns, please don't hesitate to contact us directly.</p>
    <button type="button" id="start-over-button">Submit Another Request</button>
  `;

  // Create and append the form
  const formContainer = document.createElement('div');
  formContainer.id = 'rental-request-form';
  document.currentScript.parentNode.insertBefore(formContainer, document.currentScript);

  let currentPage = 1;
  const formData = {};
  let autocomplete;

  function renderForm() {
    if (currentPage === 1) {
      formContainer.innerHTML = createContactInfoForm();
      document.getElementById('next-button').addEventListener('click', handleNextPage);
    } else if (currentPage === 2) {
      formContainer.innerHTML = createRampDetailsForm();
      document.getElementById('prev-button').addEventListener('click', handlePrevPage);
      formContainer.querySelector('form').addEventListener('submit', handleSubmit);
      initAutocomplete();
    } else {
      formContainer.innerHTML = createConfirmationPage();
      document.getElementById('start-over-button').addEventListener('click', handleStartOver);
    }
  }

  function initAutocomplete() {
    const input = document.getElementById('installAddress');
    autocomplete = new google.maps.places.Autocomplete(input, {
      types: ['address'],
      componentRestrictions: { country: 'us' }
    });
    autocomplete.addListener('place_changed', fillInAddress);
  }

  function fillInAddress() {
    const place = autocomplete.getPlace();
    let address = '';
    let postcode = '';

    for (const component of place.address_components) {
      const componentType = component.types[0];

      switch (componentType) {
        case 'street_number':
          address = `${component.long_name} ${address}`;
          break;
        case 'route':
          address += component.short_name;
          break;
        case 'postal_code':
          postcode = `${component.long_name}${postcode}`;
          break;
        case 'postal_code_suffix':
          postcode = `${postcode}-${component.long_name}`;
          break;
        case 'locality':
          address += `, ${component.long_name}`;
          break;
        case 'administrative_area_level_1':
          address += `, ${component.short_name}`;
          break;
      }
    }

    document.getElementById('installAddress').value = `${address} ${postcode}`.trim();
    formData.installAddress = `${address} ${postcode}`.trim();
  }

  function validatePage(pageNum) {
    const errors = {};
    if (pageNum === 1) {
      if (!formData.firstName) errors.firstName = 'First name is required';
      if (!formData.lastName) errors.lastName = 'Last name is required';
      if (!formData.email) errors.email = 'Email is required';
      if (!formData.phone) errors.phone = 'Phone number is required';
    } else if (pageNum === 2) {
      if (!formData.knowRampLength) errors.knowRampLength = 'Please select an option';
      if (!formData.knowRentalDuration) errors.knowRentalDuration = 'Please select an option';
      if (!formData.installationTimeframe) errors.installationTimeframe = 'Please select a timeframe';
      if (!formData.installAddress) errors.installAddress = 'Installation address is required';
    }
    return errors;
  }

  function displayErrors(errors) {
    Object.keys(errors).forEach(key => {
      const errorElement = document.getElementById(`${key}-error`);
      if (errorElement) {
        errorElement.textContent = errors[key];
      }
    });
  }

  function handleNextPage() {
    const errors = validatePage(1);
    if (Object.keys(errors).length === 0) {
      currentPage = 2;
      renderForm();
    } else {
      displayErrors(errors);
    }
  }

  function handlePrevPage() {
    currentPage = 1;
    renderForm();
  }

  function handleStartOver() {
    currentPage = 1;
    Object.keys(formData).forEach(key => delete formData[key]);
    renderForm();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const errors = validatePage(2);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('https://app.samedayramps.com/api/rental-requests', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          currentPage = 3;
          renderForm();
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Submission failed');
        }
      } catch (error) {
        console.error('Error:', error);
        alert(`An error occurred: ${error.message}`);
      }
    } else {
      displayErrors(errors);
    }
  }

  formContainer.addEventListener('change', (event) => {
    const { name, value, type } = event.target;
    if (type === 'checkbox') {
      formData[name] = formData[name] || [];
      if (event.target.checked) {
        formData[name].push(value);
      } else {
        formData[name] = formData[name].filter(item => item !== value);
      }
    } else {
      formData[name] = value;
    }
  });

  renderForm();

  // Load Google Maps JavaScript API
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAVfRl3PtrFzGt-IGAPQvusRHALnK3NJhg&libraries=places`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
})();