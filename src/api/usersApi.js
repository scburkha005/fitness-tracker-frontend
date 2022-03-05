import axios from 'axios';

const api = axios.create({
  baseURL: 'https://evening-wave-11430.herokuapp.com/api'
})

export const register = async ({ username, password }) => {
  try {
    const { data } = await api.post('/users/register', {
      username,
      password
    });

    return data;
  } catch ({ response: error }) {
    throw error;
  }
}

export const login = async ({ username, password }) =>  {
  try {
    const { data } = await api.post('/users/login', {
      username,
      password
    });

    return data;
  } catch ({ response: error }) {
    throw error;
  }
}

export const getUser = async ({ token }) => {
  try {
    const { data } = await api.get('/me', {
      token
    });

    return data;
  } catch ({ response: error }) {
    throw error;
  }
}