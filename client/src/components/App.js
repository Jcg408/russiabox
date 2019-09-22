import React from 'react';
import '../css/App.css';
import Main from './Home';
import Info from './Info';
import Boxes from '../containers/Boxes';
import BoxForm from '../containers/BoxForm';
import NoteForm from '../containers/NoteForm';
import Notes from '../containers/Notes';
import Navbar from './Navbar';
import Villages from './Villages';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
       <div className="App">
         <div className="container-fluid">
            <Navbar/>
            
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/boxes' component={Boxes} />
              <Route exact path='/box/new' component={BoxForm} />
              <Route exact path='/note/new' component={NoteForm} />
              <Route exact path='/notes' component={Notes} />
              <Route exact path='/info' component={Info} />
              <Route exact path='/villages' component={Villages}/>
            </Switch>
         </div>
      </div> 
  );
}

export default App;
