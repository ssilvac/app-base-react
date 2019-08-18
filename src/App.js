import React, { Fragment }  from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <Fragment>
      <Header></Header>

      <div style={{height: 700+'px'}}>Contenido</div>

      <Footer></Footer>
    </Fragment>
    
  );
}

export default App;
