import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navigation from './components/Navbar';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
      <Routes>
          <Route exact path='/' element={<NotesList />} />
          <Route path='/edit/:id' element={<CreateNote />} />
          <Route path='/create' element={<CreateNote />} />
          <Route path='/user' element={<CreateUser />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
