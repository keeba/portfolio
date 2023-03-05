import {projects} from '../api';
import Typography from '@mui/joy/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/joy/Box';

export default function Projects() {
    return ( 
        <Box lineHeight="lg">
            <Typography level="h1" fontSize="1.5rem" fontWeight="lg">Projects</Typography>
            <Typography level="h2" fontSize="xl">Apps I've Built</Typography>
            <Typography level="body1" sx={{mb: 1.5}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                fuga dolore.
            </Typography>
            {projects.map((project) => (
            <Card sx={{ minWidth: 275, maxWidth: 1000, mb: 1.5 }} key={project.title} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div" >
                        {project.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {project.subtitle}
                    </Typography>
                    <Typography variant="body2">
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            ))}
        </Box>
    );
            
}
        