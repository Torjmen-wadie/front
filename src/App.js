import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Signup from './signup/signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;