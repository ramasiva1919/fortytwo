import React from 'react';
import { Button } from '@mui/material';
import { useToast } from './toasterProvider';

export default function ToasterComponent() {
  const { showToast } = useToast();

  return (
    <Button onClick={() => showToast('This is a toast!', 'success')}>
      Show Toast
    </Button>
  );
}