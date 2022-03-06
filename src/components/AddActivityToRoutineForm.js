import { useState } from 'react';
import { useQuery } from 'react-query';
import { updateState } from './utils';
import { fetchActivities } from '../api/activitiesApi';

const AddActivityToRoutineForm = ({ routineId, token}) => {
  const [routineFields, setRoutineFields] = useState({activityId: 0, count: 0, duration: 0});

  const { data: activities } = useQuery('activities', async () => await fetchActivities());

  const handleChange = (e) => {
    updateState(e, routineFields, setRoutineFields)
  }

  const handleSubmit = async (e) => {

  }

  const { activityId, count, duration } = routineFields;
  console.log(activityId, count, duration)
  return (
    <>
      <h2>Add Activities to Routine</h2>
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