import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Composer from './pages/Composer/Composer';
import About from './pages/About/About';
import * as serviceWorker from './serviceWorker';

console.log('p', process.env.PUBLIC_URL);

function App() {
  return (
    <HashRouter basename={`${process.env.PUBLIC_URL}/`} onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/composer/:language" component={Composer} />
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
