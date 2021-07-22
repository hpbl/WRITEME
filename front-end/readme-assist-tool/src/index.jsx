import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Switch, Route, BrowserRouter,
} from 'react-router-dom';
import ReactGA from 'react-ga';
import './index.css';
import Composer from './pages/Composer/Composer';
import About from './pages/About/About';
import * as serviceWorker from './serviceWorker';


function App() {
  ReactGA.initialize('UA-144891941-1');
  ReactGA.pageview('/');

  return (
    <HashRouter basename={`${process.env.PUBLIC_URL}/`} onUpdate={() => window.scrollTo(0, 0)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/composer/:language" component={Composer} />
        </Switch>
      </BrowserRouter>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
