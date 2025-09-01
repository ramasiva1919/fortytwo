import React, { useState } from 'react';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  TextField,
} from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import axios from 'axios';

const STATIC_DAYS = [
  { id: 'mon', label: 'Monday' },
  { id: 'tue', label: 'Tuesday' },
  { id: 'wed', label: 'Wednesday' },
  { id: 'thu', label: 'Thursday' },
  { id: 'fri', label: 'Friday' },
];

const ScheduleForm = () => {
  // Initialize schedule state with static days, all enabled by default, default times 9am-5pm
  const [schedule, setSchedule] = useState(() => {
    const init = {};
    STATIC_DAYS.forEach(({ id }) => {
      init[id] = {
        start: dayjs().hour(9).minute(0),
        end: dayjs().hour(17).minute(0),
        enabled: true,
      };
    });
    return init;
  });

  // Toggle enable/disable for a day
  const toggleDay = (id) => {
    setSchedule((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        enabled: !prev[id].enabled,
      },
    }));
  };

  // Change time for a day
  const changeTime = (id, type, value) => {
    setSchedule((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: value,
      },
    }));
  };

  // Submit schedule data via Axios
  const handleSubmit = async () => {
    // Prepare payload with only enabled days
    const payload = Object.entries(schedule)
      .filter(([_, val]) => val.enabled)
      .map(([day, val]) => ({
        day,
        startTime: val.start.format('HH:mm'),
        endTime: val.end.format('HH:mm'),
      }));

    try {
      // Replace URL with your actual endpoint
      const response = await axios.post('/api/schedule', { schedule: payload });
      alert('Schedule submitted successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      alert('Failed to submit schedule');
      console.error(error);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Weekly Schedule (Static Days)
        </Typography>

        {STATIC_DAYS.map(({ id, label }) => {
          const dayData = schedule[id];
          return (
            <Box key={id} sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dayData.enabled}
                    onChange={() => toggleDay(id)}
                  />
                }
                label={label}
              />
              {dayData.enabled && (
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={6}>
                    <TimePicker
                      label="Start Time"
                      value={dayData.start}
                      onChange={(newVal) => changeTime(id, 'start', newVal)}
                      renderInput={(params) => <TextField fullWidth {...params} />}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TimePicker
                      label="End Time"
                      value={dayData.end}
                      onChange={(newVal) => changeTime(id, 'end', newVal)}
                      renderInput={(params) => <TextField fullWidth {...params} />}
                    />
                  </Grid>
                </Grid>
              )}
            </Box>
          );
        })}

        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Submit Schedule
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default ScheduleForm;