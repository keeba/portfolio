import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function Route({route, open, pathName, handleClick}) {
    const getTabColor = (path) => {
        return path == pathName ? 'danger' : 'info';
    }
    const getIconColor = (path) => {
        return path == pathName ? 'red' : 'blue';
    }
    return (
        <ListItemButton key={route.id} disablePadding>
            <i className={route.icon} style={{color: getIconColor(route.url)}} aria-hidden="true"></i>
            <Link sx={{pl: 1 }} underline="hover" color={getTabColor(route.url)} to={route.url} component={RouterLink}>{route.label}</Link>
            { (route.subMenuItems) && (open ? <ExpandLess onClick={() => {handleClick(route.id)}}/> : <ExpandMore onClick={() => {handleClick(route.id)}}/>)}
        </ListItemButton>
    );
}