import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, TextField, Dialog, DialogActions,
  DialogContent, DialogTitle
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';

const initialData = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

function Crud() {
  const [users, setUsers] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '' });

  const handleEditClick = (user) => {
    setCurrentUser(user);
    setOpen(true);
  };

  const handleDelete = (id) => {
    // Replace with your API endpoint
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => console.error(err));
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentUser({ id: null, name: '', email: '' });
  };

  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (currentUser.id) {
      // Update
      axios.put(`https://jsonplaceholder.typicode.com/users/${currentUser.id}`, currentUser)
        .then(() => {
          setUsers(users.map(u => u.id === currentUser.id ? currentUser : u));
          handleClose();
        });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>User Table with CRUD (Static Data)</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button color="primary" onClick={() => handleEditClick(user)}>
                    <Edit />
                  </Button>
                  <Button color="error" onClick={() => handleDelete(user.id)}>
                    <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            value={currentUser.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            value={currentUser.email}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleSave} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Crud;
