import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {routes} from '../api';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function SideBar({theme, open, handleDrawerClose, pathName}) {
  const getTabColor = (path) => {
    console.log(path, pathName);
    return path == pathName ? 'danger' : 'info';
  }
  return (
    <Drawer
    sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        },
    }}
    variant="persistent"
    anchor="left"
    open={open}
    >
        <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            {routes.map(({name, path}, index) => (
                <ListItem key={name} disablePadding>
                    <ListItemButton>
                        <Link underline="hover" color={getTabColor(path)} to={path} component={RouterLink}>{name}</Link>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Drawer>
  );
}

