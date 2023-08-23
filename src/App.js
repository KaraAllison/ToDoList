import './App.css';
import Header from './components/Header/Header.js';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignUp/SignIn';
import ToDo from './components/ToDo/ToDo';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [log, setLog] = useState(false);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header log={log} setLog={setLog}/>
          <SignUp log={log} setLog={setLog}/></>} />
          <Route path='/signin' element={<><Header log={log} setLog={setLog}/>
          <SignIn log={log} setLog={setLog}/></>} />
          <Route path='/todo' element={<><Header log={log} setLog={setLog}/>
          <ToDo log={log} setLog={setLog}/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
