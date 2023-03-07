import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

export default function About() {
  return (
    <Box lineHeight="lg">
      <Typography level="h1" fontSize="1.5rem" fontWeight="lg"> Hi, I'm Reed.</Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        I love to build amazing apps.
      </Typography>
      <Typography level="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
        laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
        Laborum, voluptas natus?
      </Typography>
    </Box>
  );
}
