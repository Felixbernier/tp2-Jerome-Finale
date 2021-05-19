import React, {Component, Fragment } from 'react';
import {Route} from 'react-router';
import Taches from './components/Taches';

export default class App extends Component {

  render() {
    return(
      <Fragment>
          <Route path='/Taches' >  </Route>
          <Taches />
        
      </Fragment>
    );
  }
}