import React from 'react';
import { Button } from '@/components/ui/Button';

interface ActionButtonProps {
  onClick: () => void;
  label: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onClick, label, variant = 'default' }) => (
  <Button onClick={onClick} variant={variant}>
    {label}
  </Button>
);