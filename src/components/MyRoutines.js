import { useQuery } from 'react-query';
import * as api from '../api/usersApi';

const MyRoutines = ({ token }) => {

  const { data: { username }, isLoading } = useQuery(['user'], async () => await api.getUser(token));
  //enabled to only run once the username is defined from the first query
  const { data: routines, isLoading: loadingRoutines } = useQuery({
    queryKey: ['routinesByUsername', username],
    queryFn: async () => await api.getRoutinesByUsername(username),
    enabled: Boolean(username)
  });
  console.log(routines)

  return (
    <>

    </>
  )
}

export default MyRoutines;