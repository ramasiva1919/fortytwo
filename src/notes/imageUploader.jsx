import React, { useState } from 'react';
import axios from 'axios';
import { Button, Avatar, Box, Typography, CircularProgress } from '@mui/material';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    document.getElementById('imageInput').click();
  };

  const handleSubmit = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage); // 'image' is the field name expected by your backend

    try {
      setUploading(true);
      setUploadSuccess(false);
      setError('');

      const response = await axios.post('https://your-api-url.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload success:', response.data);
      setUploadSuccess(true);
    } catch (err) {
      console.error('Upload error:', err);
      setError('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <input
        accept="image/*"
        id="imageInput"
        type="file"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <Avatar src={preview} sx={{ width: 120, height: 120 }} alt="Preview" />

      <Button variant="contained" onClick={handleUploadClick}>
        Choose Picture
      </Button>

      {selectedImage && (
        <>
          <Typography variant="body2">{selectedImage.name}</Typography>

          <Button
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
            disabled={uploading}
          >
            {uploading ? <CircularProgress size={24} /> : 'Upload to Server'}
          </Button>
        </>
      )}

      {uploadSuccess && <Typography color="success.main">Upload successful!</Typography>}
      {error && <Typography color="error.main">{error}</Typography>}
    </Box>
  );
}

export default ImageUploader;

// import React, { useState } from 'react';
// import { Button, Avatar, Box, Typography } from '@mui/material';

// function ImageUploader() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedImage(file);
//       // const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleUploadClick = () => {
//     document.getElementById('imageInput').click();
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//       <input
//         accept="image/*"
//         id="imageInput"
//         type="file"
//         style={{ display: 'none' }}
//         onChange={handleImageChange}
//       />
//       <Avatar
//         src={preview}
//         sx={{ width: 120, height: 120 }}
//         alt="Preview"
//       />
//       <Button variant="contained" onClick={handleUploadClick}>
//         Upload Picture
//       </Button>
//       {selectedImage && (
//         <Typography variant="body2">{selectedImage.name}</Typography>
//       )}
//     </Box>
//   );
// }

// export default ImageUploader;