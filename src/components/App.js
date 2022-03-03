import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home, AccountForm, ButtonLogout, Routines } from './';

const App = () => {
  const [token, setToken] = useState('');

  //grab token from localStorage if it exists
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, [])

  //set token into localStorage if it exists
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token])

  return (
    <div className="App">
      <nav className='navbar'>
        {
          token
          ? <ButtonLogout setToken={setToken}/>
          : <Link to='account/login'>Login</Link>
        }
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route exact path='/account/:method' element={<AccountForm setToken={setToken}/>} />
        <Route path='/routines' element={<Routines />}/>
      </Routes>
    </div>
  );
}

export default App;
