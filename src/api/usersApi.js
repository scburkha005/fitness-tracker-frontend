import axios from 'axios';

const api = axios.create({
  baseURL: 'https://evening-wave-11430.herokuapp.com/api'
})

export const register = async (username, password) => {
  try {
    const { data } = await api.post('/users/register', {
      username,
      password
    });

    return data;
  } catch (err) {
    console.error(err);
  }
}