import { useParams, useNavigate } from "react-router";
import { updateRoutine } from "../api/routinesApi";
import RoutinesForm from "./RoutinesForm";

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
      <RoutinesForm handleSubmit={handleEdit} singleRoutine={editRoutine} setSingleRoutine={setEditRoutine}/>
    </>
  )
}

export default EditRoutine;