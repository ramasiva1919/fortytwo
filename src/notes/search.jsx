import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  CircularProgress
} from '@mui/material';
import axios from 'axios';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [normalSearchTerm, setNormalSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // ---------------- Dynamic Search ----------------
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim() !== '') {
        fetchUsers(searchTerm);
      } else {
        setResults([]);
      }
    }, 500); // debounce for 500ms

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  // ---------------- Normal Search ----------------
  const handleNormalSearch = () => {
    if (normalSearchTerm.trim() !== '') {
      fetchUsers(normalSearchTerm);
    }
  };

  const fetchUsers = async (query) => {
    setLoading(true);
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const filtered = res.data.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 500, margin: '0 auto', padding: 2 }}>
      <h2>🔍 Dynamic Search</h2>
      <TextField
        label="Live Search Users"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2>📝 Normal Search</h2>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          label="Search Users"
          fullWidth
          value={normalSearchTerm}
          onChange={(e) => setNormalSearchTerm(e.target.value)}
        />
        <Button variant="contained" onClick={handleNormalSearch}>
          Search
        </Button>
      </Box>

      {loading && <CircularProgress sx={{ mt: 2 }} />}

      <List>
        {results.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SearchComponent;