import React, { useState } from 'react';
import { Box, LinearProgress, Container, TextField } from '@mui/material';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const change = (event) => {
    let value = event.target.value.replace(/[^0-9%]/g, "");
    if (value === undefined) {
      setProgress(0);
      return;
    }
    
    if (value === "" || value === "%") {
      setProgress(0);
    } else {
      const numericValue = value.replace("%", "");
      
      if (numericValue >= 0 && numericValue <= 100) {
        setProgress(Number(numericValue)); // numeric Value
      }
    }
    
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: 24, textAlign: 'left', padding: 30 }}>
      <TextField
        value={`${progress}%`} //  %
        
        onChange={change}
        type="text"
        margin="normal"
      />
      <Box sx={{ width: '100%', maxWidth: '100%',  }}>
        <LinearProgress
          value={progress}
          variant="determinate"
          sx={{
            height: 60,
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'red',
              
            },
          }}
        />
      </Box>
    </Container>
  );
}

export default ProgressBar;
