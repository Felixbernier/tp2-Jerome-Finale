import React, {Component, Fragment } from 'react';
import {Route} from 'react-router';
import {Contact} from './components/Contact';

export default class App extends Component {

  render() {
    return(
      <Fragment>
        <Route path='/contact' render={(props) => (
          <Contact {...props} nom={"Félix Benrier"} telephone={"312-3123"}/>
        )}/>
      </Fragment>
    );
  }
}