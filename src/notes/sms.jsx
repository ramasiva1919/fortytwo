import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const SMS = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ open: false, severity: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone || !message) {
      setStatus({ open: true, severity: 'warning', text: 'Please fill out all fields.' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/send-sms', {
        phone,
        message,
      });

      setStatus({ open: true, severity: 'success', text: response.data.message });
    } catch (error) {
      setStatus({
        open: true,
        severity: 'error',
        text: error.response?.data?.message || 'Failed to send SMS.',
      });
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Send SMS
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Phone Number"
          variant="outlined"
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+11234567890"
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send SMS
        </Button>
      </form>

      <Snackbar
        open={status.open}
        autoHideDuration={4000}
        onClose={() => setStatus({ ...status, open: false })}
      >
        <Alert severity={status.severity} onClose={() => setStatus({ ...status, open: false })}>
          {status.text}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SMS;