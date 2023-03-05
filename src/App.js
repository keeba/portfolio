import * as React from 'react';
import {useLocation} from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SideBar from './components/sidebar';
import Heading from './components/heading';
import About from './routes/about';
import Projects from './routes/projects';
import Skills from './routes/skills';
import Contact from './routes/contact';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const location = useLocation();
  const pathName = location.pathname.replace('/','');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Heading open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar theme={theme} open={open} handleDrawerClose={handleDrawerClose} pathName={location.pathname}/>
      <Main open={open}>
        <DrawerHeader />
        {(!pathName || pathName == 'about') && <About />}
        {pathName == 'projects' && <Projects />}
        {pathName == 'skills' && <Skills />}
        {pathName == 'contact' && <Contact />}
      </Main>
    </Box>
  );
}

