import { useNavigate, useLocation } from "react-router";
import { deleteRoutine } from "../api/routinesApi";
import ActivitiesSingle from "./ActivitiesSingle";
import './routineSingle.css';

const RoutineSingle = ({routine, user, setEditRoutine, token, routines, setRoutines, mutate}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {name, goal, creatorName} = routine;

    const handleEdit = () => {
        setEditRoutine(routine);
        navigate(`/routines/edit/${routine.id}`);
    }
    //standard useState react delete - deletes when on the /routines route
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const deletedRoutine = await deleteRoutine({ routineId: routine.id, token });
            const updatedRoutines = routines.filter(routine => routine.id !== deletedRoutine.id)
            setRoutines(updatedRoutines);
        } catch (err) {
            console.error(err);
        }
        navigate('/routines')
    }

    //useQuery method of deleting - deletes when on the /myroutines route
    const handleDeleteViaQuery = (e) => {
        e.preventDefault();
        mutate({ routineId: routine.id, token });
    }

    return (
        <>
            <div className="routine-single">
                <div>Name:</div>
                <div>{name}</div>
                <div>Goal:</div>
                <div>{goal}</div>
                {routine.activities?.map(activity => {
                return <ActivitiesSingle key={activity.id} activity={activity} user={user} setEditRoutine={setEditRoutine} token={token} editRoutine={routine}/>
            })}
                <div>Created By: {creatorName}</div>
            </div>
            {// when the pathname includes edit, dont render edit delete button
            !location.pathname.includes('edit') &&
            <form className="routine-single-button-form">
                {user?.id === routine.creatorId && <button onClick={handleEdit} className='routine-single-edit-button'>Edit</button>}
                {user?.id === routine.creatorId && <button onClick={mutate ? handleDeleteViaQuery : handleDelete} className='routine-single-delete-button'>Delete</button>}
            </form>
            }
        </> 
    )
}

export default RoutineSingle;