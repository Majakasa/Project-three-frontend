import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import About from '../components/About';
import Login from '../components/Login';
import Battle from '../containers/BattleContainer';
import SignUp from '../components/SignUp';

import CharacterList from '../containers/ListContainer';
import AddContainer from '../containers/AddContainer';
import DeleteContainer from '../containers/DeleteContainer';
import FindContainer from '../containers/FindContainer';




const routes =(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='add' component={AddContainer} />
      <Route path='about' component={About} />
      <Route path='charactersList' component={CharacterList} />
      <Route path='battle' component={Battle} />
      <Route path='delete' component={DeleteContainer} />
      <Route path='find' component={FindContainer} />
      <Route path='login' component={Login} />
      <Route path='signup' component={SignUp} />


    </Route>
  </Router>
);

export default routes;
