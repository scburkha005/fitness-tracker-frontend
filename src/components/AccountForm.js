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
  const { mutate, isLoading } = useMutation(api[method], {
    onError: ({ data: { message }}) => {
      console.log(message)
      setMessage(message);
    },
    onSuccess: ({ message, token }) => {
      console.log(message, token);
      setToken(token);
      setMessage(message);
      navigate('/routines');
    }
  });
  if (isLoading) {
    return "Loading..."
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    mutate(userFields);
  }

  const handleChange = async (e) => {
    const { placeholder, value } = e.target;
    setUserFields({...userFields, [placeholder]: value});
  }

  //destructure our fields state
  const { username, password } = userFields;
  console.log('username', username, 'password', password);
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