import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import * as api from '../api/usersApi';
import { updateState } from './utils';

const AccountForm = ({ setToken }) => {
  const [userFields, setUserFields] = useState({username: '', password: ''})
  const [message, setMessage] = useState('');
  const { method } = useParams();
  const navigate = useNavigate();
  const accountMethod = method === 'login' ? 'Log In' : 'Register';

  //reset values of userFields when switching between login/register
  useEffect(() => {
    setUserFields({
      username: '',
      password: ''
    });
  }, [method])

  //dynamically calls login or register based on :method
  const { mutate, isLoading } = useMutation(api[method], {
    onError: ({ data: { message }}) => {
      setMessage(message);
    },
    onSuccess: ({ message, token }) => {
      setToken(token);
      setMessage(message);
      navigate('/routines');
    }
  });
  if (isLoading) {
    return "Loading..."
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(userFields);
  }

  const handleChange = (e) => {
    updateState(e, userFields, setUserFields);
  }

  //destructure our fields state
  const { username, password } = userFields;
  return (
    <form className='account-form' onSubmit={handleSubmit}>
      <h2>{accountMethod}</h2>
      {message && <div>{message}</div>}
      <input placeholder='username' value={username} onChange={handleChange}/>
      <input placeholder='password' type='password' value={password} onChange={handleChange}/>
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