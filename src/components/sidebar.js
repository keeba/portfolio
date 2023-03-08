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

  React.useEffect(() => {
    const hTempOpen = {};
    routes.forEach((route) => {
      if (pathName.match(route.url)) {
        if (route.subMenuItems && route.subMenuItems.length > 0) {
          route.subMenuItems.forEach((subRoute) => {
            if (pathName.match(subRoute.url)) {
              hTempOpen[route.id] = true;
              if (subRoute.subMenuItems && subRoute.subMenuItems.length > 0) {
                subRoute.subMenuItems.forEach((subsubRoute) => {
                  if (pathName.match(subsubRoute.url)) {
                    hTempOpen[subRoute.id] = true;
                  }
                })
              }
            }
          })
        }
      }
    });
    setOpen(hTempOpen);
  }, []);

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
            {
              routes.map((route) => (
                <div key={'div' + route.id}>
                  <Route route={route} pathName={pathName} open={hOpen[route.id]} handleClick={handleClick}/>
                  {(route.subMenuItems && route.subMenuItems.length > 0) &&
                    <Collapse in={hOpen[route.id]} timeout="auto">
                      <List component="div" sx={{pl:3}}>
                        {route.subMenuItems.map((subRoute) => (
                          <div key={'div' + subRoute.id}>
                            <Route  route={subRoute} pathName={pathName} open={hOpen[subRoute.id]} handleClick={handleClick}/>
                            {(subRoute.subMenuItems && subRoute.subMenuItems.length > 0) &&
                              <Collapse in={hOpen[subRoute.id]}>
                                <List component="div"  timeout="auto" sx={{pl:3}}>
                                  {subRoute.subMenuItems.map((subsubRoute) => (
                                      <Route key={'subsubRoute' + subsubRoute.id} route={subsubRoute} pathName={pathName}/>
                                  ))}
                                </List>
                              </Collapse>
                            }
                          </div>
                        ))}
                      </List>
                    </Collapse>
                  }
                </div>
              ))
            }
        </List>
    </Drawer>
  );
}

