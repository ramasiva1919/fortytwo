import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  FormHelperText,
} from '@mui/material';
import {  IconButton, Box, Stack } from '@mui/material';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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

const MaterialRadioButtons = () => {
  const [value, setValue] = useState('lead');
  const [selectedClientTypes, setSelectedClientTypes] = useState([]);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    phone: '',
    date: null,
  });

  const [errors, setErrors] = useState({});
  const [fields, setFields] = useState([{ value: '' }]);
const [rows, setRows] = useState([
    { field1: '', field2: '', field3: '' }
  ]);

  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedClientTypes(typeof value === 'string' ? value.split(',') : value);
    setError(value.length === 0);
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

    try {
      const fullFormData = {
        ...formData,
        clientTypes: selectedClientTypes,
        type: value,
      };

      await axios.post('/api/submit-form', fullFormData);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed');
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
 const handleAddRow = () => {
    setRows([...rows, { field1: '', field2: '', field3: '' }]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const handlDinamiceChange = (rowIndex, fieldName, value) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][fieldName] = value;
    setRows(updatedRows);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: 40 }}>
      <Typography variant="h5" gutterBottom>
        Client Form
      </Typography>

      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Select Type</FormLabel>
        <RadioGroup row value={value} onChange={handleChange}>
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
          <Grid item xs={12}>
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

          <Grid item xs={12}>
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

          <Grid item xs={12}>
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

          <Grid item xs={12}>
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
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </LocalizationProvider>
      <Box sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
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
            onChange={(e) => handlDinamiceChange(index, 'field1', e.target.value)}
            fullWidth
          />
          <TextField
            label="Field 2"
            value={row.field2}
            onChange={(e) => handlDinamiceChange(index, 'field2', e.target.value)}
            fullWidth
          />
          <TextField
            label="Field 3"
            value={row.field3}
            onChange={(e) => handlDinamiceChange(index, 'field3', e.target.value)}
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
      
    </Container>
    
  );
};

export default MaterialRadioButtons;
{/* <Box sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      {fields.map((field, index) => (
        <Stack direction="row" spacing={2} key={index} alignItems="center" sx={{ mb: 2 }}>
          <TextField
            label={`Field ${index + 1}`}
            value={field.value}
            onChange={(e) => handleDinamicChange(index, e)}
            fullWidth
          />
          
          {fields.length > 1 && (
            <IconButton onClick={() => handleRemoveField(index)} color="error">
              <RemoveIcon />
            </IconButton>
          )}
          {index === fields.length - 1 && (
            <IconButton onClick={handleAddField} color="primary">
              <AddIcon />
            </IconButton>
          )}
        </Stack>
      ))}
    </Box> */}
// import React, { useState } from 'react';
// import {
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,Container,Typography, TextField,
//   Button,
//   Grid,
// } from '@mui/material';
// import {  InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput, FormHelperText } from '@mui/material';
// import axios from 'axios';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// // import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// const clientTypesOptions = [
//   { id: 1, name: 'Individual' },
//   { id: 2, name: 'Company' },
//   { id: 3, name: 'Non-Profit' },
//   { id: 4, name: 'Government' },
// ];
// const MaterialRadioButtons = () => {
//   const [value, setValue] = useState('lead');
//    const [selectedClientTypes, setSelectedClientTypes] = useState([]);
//   const [error, setError] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: null,
//     phone: '',
//     date: null,
//   });

//   const [errors, setErrors] = useState({});

// const handleSelectChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setSelectedClientTypes(typeof value === 'string' ? value.split(',') : value);
//     setError(value.length === 0);
//   };

//   const handleSubmit = async () => {
//     if (selectedClientTypes.length === 0) {
//       setError(true);
//       return;
//     }

//     try {
//       // Example: Post selected values
//       await axios.post('/api/submit-client-types', { clientTypes: selectedClientTypes });
//       alert('Submitted successfully');
//     } catch (err) {
//       console.error(err);
//     }
//   };


//  const handleFormChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleDateChange = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
//     if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
//     if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
//     if (!formData.date) newErrors.date = 'Date is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleFormSubmit = async () => {
//     if (!validate()) return;

//     try {
//       await axios.post('/api/submit-form', formData); // Replace with your API endpoint
//       alert('Form submitted successfully!');
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Submission failed');
//     }
//   };


//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <div>
//     <FormControl component="fieldset">
//       <FormLabel component="legend">Select Type</FormLabel>
//       <RadioGroup row value={value} onChange={handleChange}>
//         <FormControlLabel value="lead" control={<Radio />} label="Lead" />
//         <FormControlLabel value="client" control={<Radio />} label="Client" />
//       </RadioGroup>
//     </FormControl>
//     <div style={{ width: '100%', maxWidth: 400 }}>
//       <FormControl fullWidth error={error}>
//         <InputLabel id="client-types-label">Client Type</InputLabel>
//         <Select
//           labelId="client-types-label"
//           multiple
//           value={selectedClientTypes}
//           onChange={handleSelectChange}
//           input={<OutlinedInput label="Client Type" />}
//           renderValue={(selected) =>
//             selected
//               .map((id) => clientTypesOptions.find((option) => option.id === id)?.name)
//               .join(', ')
//           }
//         >
//           {clientTypesOptions.map((type) => (
//             <MenuItem key={type.id} value={type.id}>
//               <Checkbox checked={selectedClientTypes.indexOf(type.id) > -1} />
//               <ListItemText primary={type.name} />
//             </MenuItem>
//           ))}
//         </Select>
//         {error && <FormHelperText>This field is required</FormHelperText>}
//       </FormControl>

//       <button style={{ marginTop: 20 }} onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//     <div>
//      <Container maxWidth="sm" style={{ marginTop: 40 }}>
//       <Typography variant="h5" gutterBottom>
//         Client Form
//       </Typography>
//       <LocalizationProvider
//     //    dateAdapter={AdapterDateFns}
//       >
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               label="First Name"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleFormChange}
//               fullWidth
//               error={!!errors.firstName}
//               helperText={errors.firstName}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               label="Last Name"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleFormChange}
//               fullWidth
//               error={!!errors.lastName}
//               helperText={errors.lastName}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <DatePicker
//               label="Date of Birth"
//               value={formData.dateOfBirth}
//               onChange={(value) => handleDateChange('dateOfBirth', value)}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   fullWidth
//                   error={!!errors.dateOfBirth}
//                   helperText={errors.dateOfBirth}
//                 />
//               )}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               label="Phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleFormChange}
//               fullWidth
//               error={!!errors.phone}
//               helperText={errors.phone}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <DatePicker
//               label="Date"
//               value={formData.date}
//               onChange={(value) => handleDateChange('date', value)}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   fullWidth
//                   error={!!errors.date}
//                   helperText={errors.date}
//                 />
//               )}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <Button variant="contained" color="primary" fullWidth onClick={handleFormSubmit}>
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </LocalizationProvider>
//     </Container>
//     </div>
//     </div>
//   );
// };

// export default MaterialRadioButtons;