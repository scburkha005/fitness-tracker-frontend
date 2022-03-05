import { useNavigate } from "react-router";
import ActivitiesSingle from "./ActivitiesSingle";
import './routineSingle.css';

const RoutineSingle = ({routine, user, setEditRoutine}) => {
    const navigate = useNavigate();

    const handleEdit = async () => {
        setEditRoutine(routine);
        navigate(`/routines/edit/${routine.id}`);
    }
    return (
        <>
            <div className="routine-single">
                <div>Name:</div>
                <div>{routine.name}</div>
                <div>Goal:</div>
                <div>{routine.goal}</div>
                {routine.activities.map(activity => {
                return <ActivitiesSingle key={activity.id} activity={activity}/>
            })}
                <div>Created By: {routine.creatorName}</div>
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