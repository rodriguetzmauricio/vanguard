import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import './App.css';



import Header from "../src/Componentes/Header"

import AlianzaDelNorte from './Componentes/AlianzaDelNorte';
import Enanos from './Componentes/Enanos'
import Ratkin from './Componentes/Ratkin';

function App() {
  return (
    
    <div className="p-2">
      <Router>
      <Header/>
      

      <Link className='btn btn-secondary btn-sm m-2 p-2' to="/alianzadelnorte"> Alianza Del Norte </Link> 
      <Link className='btn btn-success btn-sm m-2 p-2' to="/enanos"> Enanos </Link>
      <Link className='btn btn-danger btn-sm m-2 p-2' to="/ratkin"> Ratkin </Link>    
      <Route path="/alianzadelnorte" exact component={AlianzaDelNorte}/>
      <Route path="/enanos" exact component={Enanos}/>
      <Route path="/ratkin" exact component={Ratkin}/>
    
    </Router>
    
    </div>
   
 
  );
}

export default App;
