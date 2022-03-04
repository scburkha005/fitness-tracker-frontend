import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home, AccountForm, ButtonLogout, Routines, Activities, AddActivity } from './';

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
        <Link to='/activities'>Activities</Link>
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
        <Route path='activities' element={<Activities token={token}/>} />
        <Route exact path='/activities/add' element={<AddActivity token={token}/>} />
      </Routes>
    </div>
  );
}

export default App;
