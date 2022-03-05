import axios from 'axios';

const api = axios.create({
  baseURL: 'https://evening-wave-11430.herokuapp.com/api/routines'
})

export const updateRoutine = async ({routineId, fields, token}) => {
  try {
    const { data } = await api({
      method: 'post',
      url: `/${routineId}`,
      headers: {'Authorization': `Bearer ${token}`},
      body: {
        fields
      }
    });

    return data;
  } catch ({ response: error }) {
    console.error(error);
  }
}