import React, { Component } from 'react'
import './App.css';
import Hero from './components/Hero';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import { Provider } from './Context'
import AddContact from './components/contacts/AddContact'
import About from './components/pages/About'
import AboutComponentClass from './components/pages/AboutComponentClass'
import AddContactUncontrolled from './components/contacts/AddContactUncontrolled'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// jsx khác html, babel
// async await api, react

class App extends Component {
  render() {
    return (
      // jsx
      <Provider>
        <Router>
        <div className="App">
          <div>
            <Header
              name="JJ"
            />
            <Routes>
           <Route path="/" exact element={<Contacts />} />
           <Route path="/addContact" exact element={<AddContact />} />
           <Route path="/AboutComponentClass/:id" exact element={<AboutComponentClass />} />
            
            {/* <AddContactUncontrolled /> */}
            </Routes>
            
          </div>
        </div>
        </Router>
      </Provider>
    );
  }

}

export default App;