import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import { useParams } from 'react-router-dom';

export default function ServiceDetails() {
let { id } = useParams();
  return (
    <Box lineHeight="lg">
      <Typography level="h1" fontSize="1.5rem" fontWeight="lg">Service Details {id}</Typography>
    </Box>
  );
}
