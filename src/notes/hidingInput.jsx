import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

export default function HidingInput() {
  const [showInput, setShowInput] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      setError(null);
      // Example API endpoint, replace with your real one
      const res = await axios.post('https://your-api-endpoint.com/submit', {
        input: inputValue,
      });
      setResponse(res.data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setShowInput(!showInput)}>
        {showInput ? 'Hide' : 'Show'} Input
      </Button>

      {showInput && (
        <>
          <TextField
            label="Your Input"
            variant="outlined"
            margin="normal"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!inputValue.trim()}
          >
            Submit
          </Button>
        </>
      )}

      {response && <div>Response: {JSON.stringify(response)}</div>}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
    </div>
  );
}


// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';

// export default function HidingInput() {
//   const [showInput, setShowInput] = useState(true);

//   return (
//     <div>
//       <Button variant="contained" onClick={() => setShowInput(!showInput)}>
//         {showInput ? 'Hide' : 'Show'} Input
//       </Button>

//       {/* Conditionally render the input */}
//       {showInput && (
//         <TextField
//           label="Your Input"
//           variant="outlined"
//           margin="normal"
//           fullWidth
//         />
//       )}
//     </div>
//   );
// }