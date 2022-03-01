import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './';

const App = () => {
  return (
    <div className="App">
      <nav className='navbar'>

      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
