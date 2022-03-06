import { useQuery, useMutation } from 'react-query';
import { deleteRoutine } from '../api/routinesApi';
import * as api from '../api/usersApi';
import RoutineSingle from './routineSingle';
import { useQueryClient } from 'react-query';

const MyRoutines = ({ token, setEditRoutine }) => {
  const queryClient = useQueryClient();

  const { data: user , isLoading } = useQuery({
    enabled: Boolean(token),
    queryKey: ['user'],
    queryFn: async () => await api.getUser(token)
  })

  //enabled to only run once the username is defined from the first query
  const { data: routines, isLoading: loadingRoutines } = useQuery({
    enabled: Boolean(user),
    queryKey: ['routinesByUsername', user],
    queryFn: async () => await api.getRoutinesByUsername(user)
  });

  //mutate to delete routine
  const { mutate } = useMutation(deleteRoutine, {
    onSuccess: (deletedRoutine) => {
      const updatedRoutines = routines.filter(routine => routine.id !== deletedRoutine.id)
      queryClient.setQueryData(['routinesByUsername', user], updatedRoutines);
    }
  })

  if (isLoading || loadingRoutines) {
    return "Loading..."
  }

  return (
    <div className='routines'>
      {
        routines?.length > 0 ?
        routines.map((routine) => {
          return (
            <RoutineSingle key={`${routine.id}-${routine.name}`} routine={routine} user={user} setEditRoutine={setEditRoutine} mutate={mutate} token={token}/>
          )
        })
        : <div>You haven't created any routines yet</div>
      }
    </div>
  )
}

export default MyRoutines;