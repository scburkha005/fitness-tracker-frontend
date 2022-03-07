import { useNavigate, useLocation } from "react-router";
import { deleteActivityByRoutineActivityId } from "../api/routineActivitiesApi";
import './ActivitiesSingle.css';

const ActivitiesSingle = ({ activity: { id, name, description, count, duration, routineActivityId }, user, editRoutine, setEditRoutine, token }) => {
  const navigate = useNavigate();
  const location = useLocation();
  //handle capitalization
  name = name.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      // remove activity from routine in db
      const deletedActivity = await deleteActivityByRoutineActivityId({routineActivityId, token});
      // create activity array without deleted activity
      const updatedActivities = editRoutine.activities.filter(activity => activity.id !== deletedActivity.activityId);
      // overwrite activities in our current routine
      const updatedRoutine = { ...editRoutine, activities: updatedActivities };
      setEditRoutine(updatedRoutine);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className='singleActivity'>
        <div>Name: <span className='singleActivity-name' onClick={() => navigate(`/activities/${id}/routines`)}>{name}</span></div>
        <div>{`Description: ${description}`}</div>
        {count && <div>{`Count: ${count}`}</div>}
        {duration && <div>{`Duration: ${duration}`}</div>}
        { user?.id && location.pathname.includes('edit') &&
        <form className="activities-single-button-form">
            <button onClick={handleDelete} className='activities-single-delete-button'>Delete</button>
        </form>
        }
      </div>
    </>
  )
}

export default ActivitiesSingle;