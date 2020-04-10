import React from 'react'
import Grow from '@material-ui/core/Grow';
import { Box, Typography, makeStyles, CssBaseline } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

import avatar from '../profilePic.png'

const elementsToTransition = [
  'Hire Me, because:',
  'I Build,',
  'I Break,',
  'I Test,',
  '& I Deploy.'
]
const timeIncreament = 1000

let waitTime = 0

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    justifyContent: 'center'
  },
  avatar: {
    width: theme.spacing(22),
    height: theme.spacing(22),
    zIndex: 1,
  },
  cover: {
    display: 'flex',
    width: '100%',
    height: '45vh',
    backgroundImage: 'url(https://unsplash.com/photos/f77Bh3inUpE/download?force=true&w=1920)',
    justifyContent: 'center',
    zIndex: 0,
    alignItems: 'flex-end',
  }
}))

function LandingPageBackdrop() {
  const classes = useStyles()
  return(
    <React.Fragment>
      <CssBaseline />
      <div className={classes.cover}>
        <Avatar alt="Mayur Kumar" component='div' src={avatar} pt={70} className={classes.avatar} />
      </div>
    </React.Fragment>
    
  )
}

class LaundingPage extends React.Component {
  
  state = { message: '', showMessage: true }

  componentDidMount() {
    elementsToTransition.forEach(element => {
      waitTime += timeIncreament
      setTimeout(() => {
        this.setState({message: element, showMessage: true})
      }, waitTime);
    });
  }
  
  render() {
    return(
      <div>
        <LandingPageBackdrop />

          <Grow direction="up" in={this.state.showMessage}>
            <Box display="flex" justifyContent="center" pt={-5}>
              <Typography component='div'>
                <Box fontFamily='"Helvetica Neue"' fontWeight='fontWeightBold' fontSize={40} fontStyle='oblique'>
                  {this.state.message}
                </Box>
              </Typography>
            </Box>
          </Grow>
      </div>
    );
  };
};

export default LaundingPage
