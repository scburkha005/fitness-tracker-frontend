import { useState } from 'react';
import { updateState } from './utils';

const AddActivityToRoutine = () => {
  const [routineFields, setRoutineFields] = useState({activityId: 0, count: 0, duration: 0});

  const handleChange = (e) => {
    updateState(e, routineFields, setRoutineFields)
  }

  const { activityId, count, duration } = routineFields;
  console.log(activityId, count, duration)
  return (
    <>
      <h2>Add Activities to Routine</h2>
      <form>
        <select>
        
        </select>
        <input value={count} placeholder='count' type='number' onChange={handleChange}/>
        <input value={duration} placeholder='duration' type='number' onChange={handleChange}/>
      </form>
    </>
  )
}

export default AddActivityToRoutine;