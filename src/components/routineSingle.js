import { useNavigate } from "react-router";
import ActivitiesSingle from "./ActivitiesSingle";
import './routineSingle.css';

const RoutineSingle = ({routine, user, setEditRoutine}) => {
    const navigate = useNavigate();
    const {name, goal, creatorName} = routine;

    const handleEdit = async () => {
        setEditRoutine(routine);
        navigate(`/routines/edit/${routine.id}`);
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
                {user.id === routine.creatorId && <button className='routine-single-delete-button'>Delete</button>}
            </form>
            }
        </> 
    )
}

export default RoutineSingle;