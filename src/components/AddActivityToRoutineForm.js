import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { updateState } from './utils';
import { fetchActivities } from '../api/activitiesApi';
import * as api from '../api/routinesApi';

const AddActivityToRoutineForm = ({ routineId, token, editRoutine, setEditRoutine }) => {
  const [message, setMessage] = useState('');
  // init activityId to 1 in the case that the user never changes the field => first activity displayed is always id 1
  const [routineFields, setRoutineFields] = useState({activityId: 1, count: 0, duration: 0});

  const { data: activities } = useQuery('activities', async () => await fetchActivities());

  const { mutate } = useMutation(api.addActivityToRoutine, {
    onError: ({ data: { message }}) => {
      if (message === 'duplicate key value violates unique constraint "routine_activities_routineId_activityId_key"') {
        setMessage('That activity already exists, please edit instead');
      } else {
        setMessage(message);
      }
    },
    // onSuccess update the editRoutine to contain the new activity
    onSuccess: ({duration, count, activityId, id}) => {
      // find activity by id
      const { name, description } = activities.find(activity => activity.id === activityId);
      // build updatedRoutine and push new activity onto nested array
      let newEditRoutine = {...editRoutine}
      newEditRoutine.activities.push({id: activityId, name, description, duration, count, routineActivityId: id});
      setEditRoutine(newEditRoutine)
    }
  });

  const handleChange = (e) => {
    updateState(e, routineFields, setRoutineFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // mutate requires a single param or object, so let's build that object with all req info
    let mutateFields = { ...routineFields, routineId };
    mutate(mutateFields);
  }

  const { activityId, count, duration } = routineFields;
  return (
    <>
      <h2>Add Activities to Routine</h2>
      {message && <div>{message}</div>}
      <form onSubmit={handleSubmit}>
        <select name='activityId' value={activityId} onChange={handleChange}>
            {activities?.map(activity => {
              return <option value={activity.id} key={activity.id}>{activity.name}</option>
            })}
        </select>
        <input value={count} placeholder='count' type='number' onChange={handleChange}/>
        <input value={duration} placeholder='duration' type='number' onChange={handleChange}/>
        <button>Add Activity</button>
      </form>
    </>
  )
}

export default AddActivityToRoutineForm;