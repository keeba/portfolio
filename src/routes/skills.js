import { Typography } from '@mui/material';
import {skills} from '../api';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/joy/Box';

export default function Skills() {
    return (
        <Box lineHeight="lg">
            <Typography level="h1" fontSize="1.5rem" fontWeight="600">Skills & Technologies</Typography>
            <Typography level="body1" sx={{mb:1.5}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                possimus est.
            </Typography>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {skills.map((skill) => <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={skill} />
                    </ListItemButton>
                </ListItem> )}
            </List>
        </Box>
    );
}