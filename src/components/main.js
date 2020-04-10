import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import AboutPage from './About';
import ContactPage from './Contact';
import ExperiencePage from './Experience';
import ResumePage from './Resume';

const Main = () => (
    <React.Fragment>
      {/* <CssBaseline /> */}
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contactme' component={ContactPage} />
          <Route path='/experience' component={ExperiencePage} />
          <Route path='/resume' component={ResumePage} />
        </Switch>
    </React.Fragment>
)

export default Main;
