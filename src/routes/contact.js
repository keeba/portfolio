import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

export default function Contact() {
    return (
    <Box lineHeight="lg">
        <Typography level="h1" fontSize="1.5rem" fontWeight="lg">EMAIL</Typography>
        <Typography level="h2" fontSize="xl" sx={{ mb: 2.5 }}>reedbarger@email.com</Typography>
        <Typography level="h1" fontSize="1.5rem" fontWeight="lg">PHONE</Typography>
        <Typography level="h2" fontSize="xl">123-456-7890</Typography>
    </Box>
    );
}