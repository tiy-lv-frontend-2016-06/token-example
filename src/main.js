import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// UI
import Forms from 'ui/Forms';

const Site = (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Forms} />
    </Router>
  </MuiThemeProvider>
);

render(Site, document.getElementById('app'));