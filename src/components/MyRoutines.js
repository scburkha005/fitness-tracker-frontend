import { useQuery } from 'react-query';
import * as api from '../api/usersApi';
import RoutineSingle from './routineSingle';

const MyRoutines = ({ token }) => {

  const { data: { username }, isLoading } = useQuery(['user'], async () => await api.getUser(token));
  //enabled to only run once the username is defined from the first query
  const { data: routines, isLoading: loadingRoutines } = useQuery({
    queryKey: ['routinesByUsername', username],
    queryFn: async () => await api.getRoutinesByUsername(username),
    enabled: Boolean(username)
  });

  if (isLoading || loadingRoutines) {
    return "Loading..."
  }

  return (
    <>
      {
        routines?.length > 0 ?
        routines.map((routine) => {
          return (
            <RoutineSingle routine={routine}/>
          )
        })
        : <div>You haven't created any routines yet</div>
      }
    </>
  )
}

export default MyRoutines;