import React from 'react';
import { Button } from '../ui/Button';

interface ConfirmationPageProps {
  onStartOver: () => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onStartOver }) => {
  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">Thank You!</h2>
      <p>
        Your rental request has been successfully submitted. We appreciate your interest in our wheelchair ramp rental service.
      </p>
      <p>
        Our team will review your request and reach out to you shortly with more information and next steps.
      </p>
      <p>
        If you have any immediate questions or concerns, please don&apos;t hesitate to contact us directly.
      </p>
      <div className="pt-4">
        <Button onClick={onStartOver} className="w-full">Submit Another Request</Button>
      </div>
    </div>
  );
};