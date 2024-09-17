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
  `;
  document.head.appendChild(style);

  // Create form HTML
  const formHTML = `
    <form id="rental-request-form">
      <input type="text" name="firstName" placeholder="First Name" required>
      <input type="text" name="lastName" placeholder="Last Name" required>
      <input type="email" name="email" placeholder="Email" required>
      <input type="tel" name="phone" placeholder="Phone" required>
      <select name="knowRampLength" required>
        <option value="">Do you know the ramp length needed?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <input type="text" name="estimatedRampLength" placeholder="Estimated Ramp Length">
      <select name="knowRentalDuration" required>
        <option value="">Do you know the rental duration?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <input type="text" name="estimatedRentalDuration" placeholder="Estimated Rental Duration">
      <input type="text" name="installationTimeframe" placeholder="Installation Timeframe" required>
      <input type="text" name="mobilityAids" placeholder="Mobility Aids (comma-separated)" required>
      <input type="text" name="installAddress" placeholder="Installation Address" required>
      <button type="submit">Submit Request</button>
    </form>
  `;

  // Create and append the form
  const formContainer = document.createElement('div');
  formContainer.innerHTML = formHTML;
  document.currentScript.parentNode.insertBefore(formContainer, document.currentScript);

  // Handle form submission
  const form = document.getElementById('rental-request-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Convert mobilityAids to an array
    data.mobilityAids = data.mobilityAids.split(',').map(aid => aid.trim());

    try {
      const response = await fetch('https://app.samedayramps.com/api/rental-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.innerHTML = '<p>Thank you for your submission!</p>';
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      form.innerHTML += `<p style="color: red;">An error occurred: ${error.message}</p>`;
    }
  });
})();