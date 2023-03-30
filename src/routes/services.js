import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

export default function Services() {
  const [languages, setLanguages] = React.useState([]);
  const [code, setCode] = React.useState('');
  const ref = React.useRef();
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

  const handleSubmit = async () => {
    fetch('http://localhost:3001/getCode', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ "language": "nodeJS", "variant": "axios", "url" : ref.current.value})
      })
    .then(response => response.text().then((data) => setCode(data)))
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <Box lineHeight="lg">
      <Typography level="h1" fontSize="1.5rem" fontWeight="lg">Services</Typography>
      <ul>
        {/*
          languages.map((l) =>
            l.variants.map((v) =>
              <li key={l.label + '_' + v.key}>{l.label} - {v.key}</li>
            )
          )
  */}
      </ul>
      <input type="text" ref={ref}/>
      <button onClick={handleSubmit}>Submit</button>
      <pre><code style={{ backgroundColor: "#eee", border: "1px solid #999", display: "block", padding: "20px"}}>{code}</code></pre>
    </Box>
  );
}
