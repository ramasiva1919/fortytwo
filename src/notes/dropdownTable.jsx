import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const DropdownWithTable = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState([]);

  const handleChange = async (event) => {
    const value = event.target.value;
    setSelectedOption(value);

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${value}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="dropdown-label">Select Resource</InputLabel>
        <Select
          labelId="dropdown-label"
          value={selectedOption}
          label="Select Resource"
          onChange={handleChange}
        >
          <MenuItem value="users">Users</MenuItem>
          <MenuItem value="posts">Posts</MenuItem>
          <MenuItem value="todos">Todos</MenuItem>
        </Select>
      </FormControl>

      {data.length > 0 && (
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                {Object.keys(data[0]).slice(0, 4).map((key) => (
                  <TableCell key={key}>{key}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  {Object.keys(item).slice(0, 4).map((key) => (
                    <TableCell key={key}>{JSON.stringify(item[key])}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default DropdownWithTable;