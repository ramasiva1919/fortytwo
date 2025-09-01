import React from 'react';
import axios from 'axios';
import { Button, Container, Typography, CircularProgress } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function Download() {
  const [loading, setLoading] = React.useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', {
        responseType: 'blob', // Important for file downloads
      });

      // Create a URL and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'sample.pdf'); // File name
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={{ marginTop: 40 }}>
      <Typography variant="h5" gutterBottom>
        Download File Example
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleDownload}
        startIcon={<DownloadIcon />}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Download PDF'}
      </Button>
    </Container>
  );
}

export default Download;