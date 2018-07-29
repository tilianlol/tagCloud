import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home.jsx';
import Data from './data/data.json';
import TagPage from './components/tagPage.jsx';

ReactDOM.render(
    <Router>
     <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={TagPage} />
        </Switch>
      </div>
    </Router>
    ,
    document.getElementById("app")
)