import { useNavigate } from "react-router";
import { deleteRoutine } from "../api/routinesApi";
import ActivitiesSingle from "./ActivitiesSingle";
import './routineSingle.css';

const RoutineSingle = ({routine, user, setEditRoutine, token, routines, setRoutines}) => {
    const navigate = useNavigate();
    const {name, goal, creatorName} = routine;

    const handleEdit = async () => {
        setEditRoutine(routine);
        navigate(`/routines/edit/${routine.id}`);
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const deletedRoutine = await deleteRoutine(routine.id, token);
            const updatedRoutines = routines.filter(routine => routine.id !== deletedRoutine.id)
            setRoutines(updatedRoutines);
        } catch (err) {
            console.error(err);
        }
        navigate('/routines')
    }
    return (
        <>
            <div className="routine-single">
                <div>Name:</div>
                <div>{name}</div>
                <div>Goal:</div>
                <div>{goal}</div>
                {routine.activities?.map(activity => {
                return <ActivitiesSingle key={activity.id} activity={activity}/>
            })}
                <div>Created By: {creatorName}</div>
            </div>
            { user &&
            <form className="routine-single-button-form">
                {user.id === routine.creatorId && <button onClick={handleEdit} className='routine-single-edit-button'>Edit</button>}
                {user.id === routine.creatorId && <button onClick={handleDelete} className='routine-single-delete-button'>Delete</button>}
            </form>
            }
        </> 
    )
}

export default RoutineSingle;