import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

export default function Model() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Style for the modal content box
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2">
            Modal Title
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            This is a fully self-contained modal component using MUI.
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 3 }} variant="outlined">
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}