import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home, AccountForm } from './';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div className="App">
      <nav className='navbar'>

      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route exact path='/account/:method' element={<AccountForm setToken={setToken}/>} />
      </Routes>
    </div>
  );
}

export default App;
