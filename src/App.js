import React from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Team from './components/Team/Team';
import Services from './components/Services/Services';


function App() {

  const title = 'ZentaV';
  const titleUrl = 'https://www.zentagroup.com/';

  return (
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
    
  );
}

export default App;
