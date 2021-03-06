import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home, AccountForm, ButtonLogout, Routines, Activities, AddActivity, MyRoutines, RoutinesByActivity, AddRoutine, EditRoutine } from './';
import { getUser } from '../api/usersApi';

const App = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [routines, setRoutines] = useState([])
  const [editRoutine, setEditRoutine] = useState({})

  //grab token from localStorage if it exists
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, [])

  //set userObject when token exists
  const fetchUser = async (token) => {
    setUser(await getUser(token))
  }
  //set token into localStorage if it exists
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      fetchUser(token);
    }
  }, [token])

  return (
    <div className="App">
      <nav className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/routines'>Routines</Link>
        {
          token && <Link to='/myroutines'>My Routines</Link>
        }
        <Link to='/activities'>Activities</Link>
        {
          token
          ? <ButtonLogout setToken={setToken} setUser={setUser}/>
          : <Link to='account/login'>Login</Link>
        }
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route exact path='/account/:method' element={<AccountForm setToken={setToken}/>} />
        <Route path='/routines' element={<Routines token={token} user={user} routines={routines} setRoutines={setRoutines} setEditRoutine={setEditRoutine}/>}/>
        <Route exact path='/routines/add' element={<AddRoutine routines={routines} setRoutines={setRoutines}/>} />
        <Route exact path='/routines/edit/:routineid' element={<EditRoutine routines={routines} editRoutine={editRoutine} setEditRoutine={setEditRoutine} token={token} user={user}/>} />
        <Route path='/activities' element={<Activities token={token}/>} />
        <Route path='/myroutines' element={<MyRoutines token={token} setEditRoutine={setEditRoutine} />} />
        <Route exact path='/activities/add' element={<AddActivity token={token}/>} />
        <Route exact path='/activities/:activityId/routines' element={<RoutinesByActivity />} />
      </Routes>
    </div>
  );
}

export default App;
