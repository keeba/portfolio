import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

export default function Services() {
  React.useEffect(()=> {
    fetch('http://localhost:3001/getLanguages', {method: "GET",
      headers: {
      "Content-Type": "text/json;charset=UTF-8"
      },
    })
    .then(response => response.json().then((data) => console.log(data)))
    .catch(error => {
      console.log(error);
    });
  },[]);

  return (
    <Box lineHeight="lg">
      <Typography level="h1" fontSize="1.5rem" fontWeight="lg"> Services</Typography>
    </Box>
  );
}
