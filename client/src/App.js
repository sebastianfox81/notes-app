import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Navigation />
        <Routes>
          <Route exact path='/' element={<NotesList />} />
          <Route path='/edit/:id' element={<CreateNote />} />
          <Route path='/create' element={<CreateNote />} />
          <Route path='/user' element={<CreateUser />} />
        </Routes>
    </Router>
  );
}

export default App;
