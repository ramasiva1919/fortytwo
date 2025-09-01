import React, { useState } from 'react';
import {
  Container,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  FormHelperText,
  Button,
  IconButton,
  Box,
  Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';
import {
  LocalizationProvider,
  DatePicker,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const clientTypesOptions = [
  { id: 1, name: 'Individual' },
  { id: 2, name: 'Company' },
  { id: 3, name: 'Non-Profit' },
  { id: 4, name: 'Government' },
];

const DynamicForm = () => {
  const [value, setValue] = useState('lead');
  const [selectedClientTypes, setSelectedClientTypes] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    phone: '',
    date: null,
  });
  const [rows, setRows] = useState([{ field1: '', field2: '', field3: '' }]);
  const [errors, setErrors] = useState({});

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    const { target: { value },} = event;
    setSelectedClientTypes(typeof value === 'string' ? value.split(',') : value);
    setErrors((prev) => ({ ...prev, clientTypes: value.length === 0 ? 'Client Type is required' : '' }));
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddRow = () => {
    setRows([...rows, { field1: '', field2: '', field3: '' }]);
  };

  const handleRemoveRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleDynamicChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (selectedClientTypes.length === 0) newErrors.clientTypes = 'Client Type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const fullFormData = {
      ...formData,
      type: value,
      clientTypes: selectedClientTypes,
      dynamicRows: rows,
    };

    try {
      await axios.post('/api/submit-form', fullFormData);
      alert('Form submitted successfully!');
      // Optionally reset form here
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed');
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Typography variant="h5" gutterBottom>
        Client Form
      </Typography>

      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Select Type</FormLabel>
        <RadioGroup row value={value} onChange={handleRadioChange}>
          <FormControlLabel value="lead" control={<Radio />} label="Lead" />
          <FormControlLabel value="client" control={<Radio />} label="Client" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth margin="normal" error={!!errors.clientTypes}>
        <InputLabel id="client-types-label">Client Type</InputLabel>
        <Select
          labelId="client-types-label"
          multiple
          value={selectedClientTypes}
          onChange={handleSelectChange}
          input={<OutlinedInput label="Client Type" />}
          renderValue={(selected) =>
            selected
              .map((id) => clientTypesOptions.find((option) => option.id === id)?.name)
              .join(', ')
          }
  //         renderValue={(selectedIds) => {
  // const selectedNames = selectedIds.map((id) => {
  //   const match = clientTypesOptions.find((option) => option.id === id);
  //   return match ? match.name : '';
  // });
        >
          {clientTypesOptions.map((type) => (
            <MenuItem key={type.id} value={type.id}>
              <Checkbox checked={selectedClientTypes.indexOf(type.id) > -1} />
              <ListItemText primary={type.name} />
            </MenuItem>
          ))}
        </Select>
        {errors.clientTypes && <FormHelperText>{errors.clientTypes}</FormHelperText>}
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleFormChange}
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleFormChange}
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              label="Date of Birth"
              value={formData.dateOfBirth}
              onChange={(value) => handleDateChange('dateOfBirth', value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={!!errors.dateOfBirth}
                  helperText={errors.dateOfBirth}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              label="Date"
              value={formData.date}
              onChange={(value) => handleDateChange('date', value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={!!errors.date}
                  helperText={errors.date}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Dynamic Fields
        </Typography>
        {rows.map((row, index) => (
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            key={index}
            sx={{ mb: 2 }}
          >
            <TextField
              label="Field 1"
              value={row.field1}
              onChange={(e) => handleDynamicChange(index, 'field1', e.target.value)}
              fullWidth
            />
            <TextField
              label="Field 2"
              value={row.field2}
              onChange={(e) => handleDynamicChange(index, 'field2', e.target.value)}
              fullWidth
            />
            <TextField
              label="Field 3"
              value={row.field3}
              onChange={(e) => handleDynamicChange(index, 'field3', e.target.value)}
              fullWidth
            />

            {rows.length > 1 && (
              <IconButton onClick={() => handleRemoveRow(index)} color="error">
                <RemoveIcon />
              </IconButton>
            )}
            {index === rows.length - 1 && (
              <IconButton onClick={handleAddRow} color="primary">
                <AddIcon />
              </IconButton>
            )}
          </Stack>
        ))}
      </Box>

      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Submit All
        </Button>
      </Box>
    </Container>
  );
};

export default DynamicForm;