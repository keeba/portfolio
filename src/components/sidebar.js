import * as React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import routes from '../menu.json';
import Collapse from '@mui/material/Collapse';
import Route from './route';

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
  const [hOpen, setOpen] = React.useState({});
  const handleClick = (id) => {
    const val = !hOpen[id];
    setOpen({...hOpen, [id]: val });
  };

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
        <List key="list1">
            {
              routes.map((route, index) => (
                <>
                  <Route route={route} pathName={pathName} open={hOpen[route.id]} handleClick={handleClick}/>
                  {(route.subMenuItems && route.subMenuItems.length > 0) &&
                    <Collapse key="collapse1" in={hOpen[route.id]} timeout="auto" unmountOnExit>
                      <List key="list2" component="div" disablePadding sx={{pl:3}}>
                        {route.subMenuItems.map((subRoute, index) => (
                          <>
                            <Route route={subRoute} pathName={pathName} open={hOpen[subRoute.id]} handleClick={handleClick}/>
                            {(subRoute.subMenuItems && subRoute.subMenuItems.length > 0) &&
                              <Collapse key="collapse2" in={hOpen[subRoute.id]}>
                                <List key="list3" component="div" disablePadding timeout="auto" unmountOnExit sx={{pl:3}}>
                                  {subRoute.subMenuItems.map((subsubRoute, index) => (
                                      <Route route={subsubRoute} pathName={pathName}/>
                                  ))}
                                </List>
                              </Collapse>
                            }
                            </>
                        ))}
                      </List>
                    </Collapse>
                  }
                </>
              ))
            }
        </List>
    </Drawer>
  );
}

