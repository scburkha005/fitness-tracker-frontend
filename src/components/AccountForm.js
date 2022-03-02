import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import * as api from '../api/usersApi'

const AccountForm = ({ setToken }) => {
  const [userFields, setUserFields] = useState({username: '', password: ''})
  const [message, setMessage] = useState('');
  const { method } = useParams();
  const navigate = useNavigate();
  const accountMethod = method === 'login' ? 'Log In' : 'Register';

  //dynamically calls login or register based on :method
  const { mutate } = useMutation(api[method], {
    onSuccess: ({message, token, user}) => {
      console.log(message, token, user);
      setToken(token);
      setMessage(message);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    mutate(userFields);
  }

  //destructure our fields state
  const { username, password } = userFields;
  console.log('username', username, 'password', password);
  return (
    <form className='account-form' onSubmit={handleSubmit}>
      <h2>{accountMethod}</h2>
      {message && <div>{message}</div>}
      <input placeholder='username' value={username} onChange={e => setUserFields({...userFields, username: e.target.value})}/>
      <input placeholder='password' type='password' value={password} onChange={e => setUserFields({...userFields, password: e.target.value})}/>
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