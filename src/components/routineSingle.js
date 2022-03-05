import ActivitiesSingle from "./ActivitiesSingle";
import './routineSingle.css';

const RoutineSingle = ({routine, user}) => {

    console.log(routine, user)
    return (
        <div className="routine-single">
            <div>Name:</div>
            <div>
                {routine.name}
            </div>
            <div>Goal:</div>
            <div>
                {routine.goal}
            </div>
            {routine.activities.map(activity => {
            return <ActivitiesSingle key={activity.id} activity={activity}/>
           })}
            <div>Created By: {routine.creatorName}</div>
        </div>
    )
}

export default RoutineSingle;