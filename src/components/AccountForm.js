import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AccountForm = ({ setToken }) => {
  const { method } = useParams();
  const navigate = useNavigate();
  const accountMethod = method === 'login' ? 'Log In' : 'Register';

  return (
    <h2>{accountMethod}</h2>
  )
}

export default AccountForm;