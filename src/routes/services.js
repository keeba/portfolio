import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

export default function Services() {
  const [languages, setLanguages] = React.useState([]);
  React.useEffect(()=> {
    fetch('http://localhost:3001/getLanguages', {method: "GET",
      headers: {
      "Content-Type": "text/json;charset=UTF-8"
      },
    })
    .then(response => response.json().then((data) => setLanguages(data)))
    .catch(error => {
      console.log(error);
    });
  },[]);

  return (
    <Box lineHeight="lg">
      <Typography level="h1" fontSize="1.5rem" fontWeight="lg">Services</Typography>
      <ul>
        {
          languages.map((l) =>
            l.variants.map((v) =>
              <li key={l.label + '_' + v.key}>{l.label} - {v.key}</li>
            )
          )
        }
      </ul>
    </Box>
  );
}
