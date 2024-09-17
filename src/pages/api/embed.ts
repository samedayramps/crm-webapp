import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(`
    (function() {
      var script = document.createElement('script');
      script.src = 'https://unpkg.com/react@17/umd/react.production.min.js';
      document.head.appendChild(script);

      script = document.createElement('script');
      script.src = 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js';
      document.head.appendChild(script);

      script = document.createElement('script');
      script.src = 'https://app.samedayramps.com/embeddable-form.js';
      document.head.appendChild(script);

      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://app.samedayramps.com/embeddable-form.css';
      document.head.appendChild(link);

      var div = document.createElement('div');
      div.id = 'rental-request-form-root';
      document.body.appendChild(div);

      script.onload = function() {
        ReactDOM.render(
          React.createElement(EmbeddableRentalRequestForm),
          document.getElementById('rental-request-form-root')
        );
      };
    })();
  `);
}