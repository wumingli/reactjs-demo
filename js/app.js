'use strict';

import React from 'react';
import Router from 'react-router';
import { Route, Redirect, RouteHandler } from 'react-router';

import SubmitHandler from './components/submit.js';
import MyHandler from './components/my.js';
import DetailHandler from './components/detail.js';
import Nav from './components/nav.js';
import Main from './components/list.js';
import Letter from './components/letter.js';
import Success from './components/suc.js';
import Animate from './components/anim.js';

require('../css/main.css');

class App extends React.Component {
    render() {
        return (
          <div className="wrapper">
            <Nav />
            <div className="main">
                <RouteHandler/>
            </div>
          </div>
        );
    }
}

let routes = (
    <Route handler={App}>
        <Route name="app" path="/" handler={Main}/>
        <Route name="submit" path="/submit" handler={SubmitHandler}/>
        <Route name="my" path="/my" handler={MyHandler}/>
        <Route name="detail" path="/detail/:id" handler={DetailHandler}/>
        <Route name="letter" path="/letter" handler={Letter}/>
        <Route name="success" path="/success" handler={Success}/>
        <Route name="animate" path="/animate" handler={Animate}/>
        <Redirect to="/" />
    </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});
