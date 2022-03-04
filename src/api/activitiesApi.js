import axios from 'axios';

const api = axios.create({
  baseURL: 'https://evening-wave-11430.herokuapp.com/api/activities'
});

export const fetchActivities = async () => {
  try {
    const { data } = await api.get('/');

    return data;
  } catch ({ response: err }) {
    throw err;
  }
}

export const addActivity = async ({ token, name, description }) => {
  try {
    const { data } = await api({
      url: '/',
      method: 'post',
      headers: {'Authorization': `Bearer ${token}`},
      data: {
        name,
        description
      }
    });

    return data;
  } catch ({ response: err }) {
    throw err;
  }
}

export const getRoutinesByActivity = async (id) => {
  try {
    const { data } = await api.get(`/${id}/routines`);

    return data;
  } catch ({ response: err }) {
    throw err;
  }
}