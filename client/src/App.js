import React, { Component } from 'react';

import Nav from './components/Nav';
import Home from './containers/Home';
import PetIndex from './containers/PetIndex';
import PetNew from './containers/PetNew';

/*
 - TODO: import BrowserRouter, Switch, and Route from react-router-dom
 - For each route instead of using render, you can just use component={}
 - Our Home PetNew PetIndex and if you do the bonus PetShow should all live in the Switch as Routes.

 the / route should go to the Home component
 the /pets/new should go to the PetNew component
 the /pets route should go to the PetIndex component
 and as bonus the /pets/:id should go to the PetShow component

 Also a tip, Nav should live in the Router but not in the Switch

 Another tip, don't worry about state in the App, since we are now mounting and unmounting based on which route, we will be using our Rails API in order to send us information and our components can connect directly to the rails api. Your job is only to setup our routing for this application and for bonus creating a PetShow component that we can connect to as well.
*/

class App extends Component {
  render() {
    return (
      <>
      <Nav />
      <div className="container">
        <Home />
        <PetNew />
        <PetIndex />
      </div>
      </>
    );
  }  
}

export default App;
