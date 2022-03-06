import axios from "axios";

const api = axios.create({
  baseURL: 'https://evening-wave-11430.herokuapp.com/api/routine_activities'
});

export const deleteActivityByRoutineActivityId = async ({ routineActivityId, token }) => {
  try {
    const { data } = await api({
      method: 'delete',
      url: `/${routineActivityId}`,
      headers: {'Authorization': `Bearer ${token}`}
    })

    return data;
  } catch ({ response: err }) {
    console.error(err);
  }
}