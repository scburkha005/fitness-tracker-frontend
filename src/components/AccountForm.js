import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const AccountForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { method } = useParams();
  const navigate = useNavigate();
  const accountMethod = method === 'login' ? 'Log In' : 'Register';

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  console.log('username', username, 'password', password);
  return (
    <form className='account-form' onSubmit={handleSubmit}>
      <h2>{accountMethod}</h2>
      <input placeholder='username' value={username} onChange={e => setUsername(e.target.value)}/>
      <input placeholder='password' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
      <button>{accountMethod}</button>
      <div>
        {
          method === 'login'
            ? <Link to={'/account/register'}>Don't have an account? Sign Up</Link>
            : <Link to={'/account/login'}>Already have an account? Log In</Link>
        }
      </div>
    </form>
  )
}

export default AccountForm;