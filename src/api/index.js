import axios from 'axios';

const api = axios.create({
  baseURL: 'https://evening-wave-11430.herokuapp.com/api'
})

export const fetchRoutines = async () => {
  try {
    const { data } = await api.get(`/routines`);

    return data;
  } catch (err) {
    console.error(err);
  }
}