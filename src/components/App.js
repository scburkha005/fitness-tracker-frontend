import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home, AccountForm } from './';

const App = () => {
  return (
    <div className="App">
      <nav className='navbar'>

      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route exact path='/account/:method' element={<AccountForm />} />
      </Routes>
    </div>
  );
}

export default App;
