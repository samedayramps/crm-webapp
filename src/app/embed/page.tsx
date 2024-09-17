import React from 'react';

export default function EmbedPage() {
  return (
    <div>
      <h1>Embed Rental Request Form</h1>
      <p>To embed the rental request form on your website, follow these steps:</p>
      <ol>
        <li>
          Add a container div to your HTML where you want the form to appear:
          <pre><code>{`<div id="rental-request-form-root"></div>`}</code></pre>
        </li>
        <li>
          Add the following script tag to your HTML, preferably just before the closing &lt;/body&gt; tag:
          <pre><code>{`<script src="https://app.samedayramps.com/api/embed"></script>`}</code></pre>
        </li>
      </ol>
      <p>The form will automatically render inside the container div.</p>
    </div>
  );
}