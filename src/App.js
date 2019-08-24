import React, { useState } from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Team from './components/Team/Team';
import Services from './components/Services/Services';

// Redux
import store from './store';
import { Provider } from 'react-redux';

function App() {

  const [ title, changeTitle ] = useState('ZentaV');
  const [ titleUrl, changeTitleUrl ] = useState('https://www.zentagroup.com/');

  return (
    <Provider store={store}>
      <Router>
        <Header title={title} />
        <main className="container">
          <Switch>
            <Route exatc path="/team" component={Team}></Route>
            <Route exatc path="/services" component={Services}></Route>
          </Switch>
        </main>
        <Footer title={title} titleUrl={titleUrl} />
      </Router>
    </Provider>
  );
}

export default App;