import React, {Component, Fragment } from 'react';
import {Route} from 'react-router';
import {Accueil} from './components/Accueil';
import {Contact} from './components/Contact';

export default class App extends Component {

  render() {
    return(
      <Fragment>
        <Route exact path='/' component={Accueil} />
        <Route path='/contact' render={(props) => (
          <Contact {...props} nom={"Félix Benrier"} telephone={"312-3123"}/>

        )}/>
      </Fragment>
    );
  }
}