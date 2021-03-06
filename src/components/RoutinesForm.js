import { updateState } from './utils';

const RoutinesForm = ({ handleSubmit, singleRoutine, setSingleRoutine }) => {
  //singleRoutine format = { name, goal }

  const handleChange = (e) => {
    updateState(e, singleRoutine, setSingleRoutine);
  }

  const { name, goal } = singleRoutine;
  return (
    <form className='activities-form' onSubmit={handleSubmit}>
      <label>Name</label>
      <input placeholder='name' value={name} onChange={handleChange}/>
      <label>Goal</label>
      <input placeholder='goal' value={goal} onChange={handleChange}/>
      <button>Submit</button>
    </form>
  )
}

export default RoutinesForm;