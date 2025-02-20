import React, {useState} from "react";
import {Box, Container, TextField} from "@mui/material";
//import axios from 'axios';
import "./App.css";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  /*const [imageUrl, setImageUrl] = useState("") //setImageUrl("https - example.com")*/

  const change = (event) => {
    let value = event.target.value.replace(/[^0-9%]/g, "");
    if (value === undefined) {
      setProgress(0);
      return;
    }
    
    if ( value === "%") {
      setProgress(0);
    } else {
      const numericValue = value.replace("%", "");
      
      if (numericValue >= 0 && numericValue <= 100) {
        setProgress(Number(numericValue)); // numeric Value
      }
    }
    
  };

  
  return (
      <Container className="container">
        <TextField
          value={`${progress}%`}
          onChange={change}
          type="text"
          margin="normal"
          size="small"
          className="text-field" 
         
        />
  
        <Box className="progress-container">
          <Box
            className="progress-bar"
            style={{
              width: `${progress}%`, 
            }}
          />
        </Box>
      </Container>
    );
  }
  
  export default ProgressBar;
  