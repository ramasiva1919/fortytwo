import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, TextField, Dialog, DialogActions,
  DialogContent, DialogTitle, Pagination, Stack
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';

// function Pagination()
const TablePagination = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '' });

  const [page, setPage] = useState(1);
  const rowsPerPage = 5; // fixed number of rows per page
  const [totalCount, setTotalCount] = useState(0); // total number of users in API

  // Fetch users when page changes
  useEffect(() => {
    // jsonplaceholder doesn't support pagination by default, so we simulate with _page and _limit params
    axios.get(`https://jsonplaceholder.typicode.com/users`, {
      params: {
        _page: page,
        _limit: rowsPerPage,
      }
    })
      .then(res => {
        setUsers(res.data);
        // total count is usually in response headers 'x-total-count' with APIs that support pagination
        const total = res.headers['x-total-count'] || 10; // fallback to 10 if header not present
        setTotalCount(parseInt(total, 10));
      })
      .catch(err => console.error(err));
  }, [page]);

  const handleEditClick = (user) => {
    setCurrentUser(user);
    setOpen(true);
  };

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        // Optimistically update UI by removing the user locally
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
      axios.put(`https://jsonplaceholder.typicode.com/users/${currentUser.id}`, currentUser)
        .then(() => {
          setUsers(users.map(u => u.id === currentUser.id ? currentUser : u));
          handleClose();
        });
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const pageCount = Math.ceil(totalCount / rowsPerPage);

  return (
    <div style={{ padding: 20 }}>
      <h2>User Table with CRUD and Pagination</h2>
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
            {users.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">No users found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Stack spacing={2} mt={2} alignItems="center">
        <Pagination
          count={pageCount}
          page={page}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      </Stack>

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

export default TablePagination;