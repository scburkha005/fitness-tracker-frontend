import axios from 'axios';

const api = axios.create({
  baseURL: 'https://evening-wave-11430.herokuapp.com/api/activities'
});

export const fetchActivities = async () => {
  try {
    const { data } = await api.get('/');

    return data;
  } catch (err) {
    throw err;
  }
}