import React, { useState } from 'react';
import { Button, Box, Typography, LinearProgress } from '@mui/material';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setMessage('');
    setProgress(0);
  };

  const handleUpload = async () => {
    if (!file) return setMessage('Please select a file first.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      setUploading(true);
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percent);
        },
      });

      setMessage(response.data.message || 'File uploaded successfully!');
    } catch (error) {
      setMessage(error.response?.data?.message || 'File upload failed.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 400, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Upload File
      </Typography>
      <input
        accept="*"
        type="file"
        onChange={handleFileChange}
        style={{ marginBottom: '1rem' }}
      />
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={uploading || !file}
        >
          Upload
        </Button>
      </Box>

      {uploading && (
        <Box sx={{ mt: 2 }}>
          <LinearProgress variant="determinate" value={progress} />
          <Typography variant="body2">{progress}%</Typography>
        </Box>
      )}

      {message && (
        <Typography sx={{ mt: 2 }} color="secondary">
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default FileUpload;