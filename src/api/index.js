import axios from 'axios';

const API_URL = 'https://evening-wave-11430.herokuapp.com/api';

export const fetchRoutines = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/routines`);

    return data;
  } catch (err) {
    console.error(err);
  }
}