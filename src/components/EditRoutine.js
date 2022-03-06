import { useParams, useNavigate } from "react-router";
import { updateRoutine } from "../api/routinesApi";
import AddActivityToRoutineForm from "./AddActivityToRoutineForm";
import RoutinesForm from "./RoutinesForm";
import RoutineSingle from "./routineSingle";

const EditRoutine = ({ routines, editRoutine, setEditRoutine, token }) => {
  const navigate = useNavigate();
  let { routineid: routineId } = useParams();
  const { name, goal } = editRoutine;
  routineId = routineId * 1;

  const handleEdit = async (e) => {
    e.preventDefault();
    const fields = { name, goal };
    const editedRoutine = await updateRoutine({ routineId, fields, token });
    for (let i = 0; i < routines.length; i++) {
      if (routines[i].id === routineId) {
        routines[i] = editedRoutine;
      }
    }
    navigate('/routines')
  }

  return (
    <>
      <h2>Editing Routine: </h2>
      <button onClick={() => navigate(-1)}>Cancel</button>
      <div className='routines'>
        <RoutineSingle routine={editRoutine}/>
      </div>
      <RoutinesForm handleSubmit={handleEdit} singleRoutine={editRoutine} setSingleRoutine={setEditRoutine}/>
      <AddActivityToRoutineForm routineId={routineId} token={token} />
    </>
  )
}

export default EditRoutine;