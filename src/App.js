import React from 'react';
import './App.css';

import appTheme from './themes/ThemeProvider';
import { ThemeProvider } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { Link, Grid } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Main from './components/main';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function AppDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Grid
              container
              justify='flex-start'
              direction='row'
              alignItems='flex-start'
              spacing="1"
              >
                  <Link component={RouterLink} to='/' color='inherit'>
                    <Typography variant='h7' color='primary.light'>Mayur Kumar</Typography>
                  </Link>
              </Grid>

            <Grid
              container
              justify='space-around'
              alignContent='space-around'
              direction='row'
              alignItems='flex-start'
              spacing="6"
              >
                  <Link component={RouterLink} color='inherit' to='/about'>
                    <Typography variant='h7' color='primary.light'>About Me</Typography>
                    <Divider color='primary.light' orientation="vertical" />
                  </Link>

                  <Link component={RouterLink} color='inherit' to='/experience'>
                    <Typography variant='h7' color='primary.light'>Experience</Typography>
                    <Divider color='primary.light' orientation="vertical" />
                  </Link>

                  <Link component={RouterLink} color='inherit' to='/resume'>
                    <Typography variant='h7' color='primary.light'>Resume</Typography>
                    <Divider color='primary.light' orientation="vertical" />
                  </Link>

                  <Link component={RouterLink} color='inherit' to='/about'>
                    <Typography variant='h7' color='primary.light'>Contact Me</Typography>
                  </Link>
                  
              </Grid>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
              <Link component={RouterLink} to='/about'>
                <ListItem>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary='About Me'></ListItemText>
                </ListItem>
              </Link>

              <Link component={RouterLink} to='/experience'>
                <ListItem>
                    <ListItemIcon><AssignmentIcon /></ListItemIcon>
                    <ListItemText primary='Experience'></ListItemText>
                </ListItem>
              </Link>

              <Link component={RouterLink} to='/resume'>
                <ListItem>
                    <ListItemIcon><AssignmentIcon /></ListItemIcon>
                    <ListItemText primary='Resume'></ListItemText>
                </ListItem>
              </Link>

              <Link component={RouterLink} to='/about'>
                <ListItem>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary='Contact Me'></ListItemText>
                </ListItem>
              </Link>
          </List>
          <Divider />
          <Divider />
          <List>
              <Link href='https://www.linkedin.com/in/mayur-kumar-03/' color='inherit' target='_blank' rel='noopener'>
                  <ListItem>
                      <ListItemIcon><LinkedIn /></ListItemIcon>
                      <ListItemText primary='LinkedIn'></ListItemText>
                  </ListItem>
              </Link>
              <Link href='https://github.com/auto-device-grid/auto-device-grid' color='inherit' target='_blank' rel='noopener'>
                  <ListItem>
                      <ListItemIcon><GitHub /></ListItemIcon>
                      <ListItemText primary='GitHub'></ListItemText>
                  </ListItem>
              </Link>
          </List>
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Main />
        </main>
      </div>
    </ThemeProvider>
  );
}


// class App extends Component{
//   render(){
//     const classes = useStyles();
    
//     return (
//       <ThemeProvider theme={theme}>
//         <div>
//           <NavBar />
//           <main className={classes.content}>
//             <div className={classes.toolbar} />
//               <Main />
//           </main>
//         </div>
//       </ThemeProvider>
//     );
//   }
// }

// export default App;
