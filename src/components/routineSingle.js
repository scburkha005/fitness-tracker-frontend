import ActivitiesSingle from "./ActivitiesSingle";


const RoutineSingle = ({routine}) => {
    // Name:
    // Description:
    // Duration:
    // Count:
    console.log(routine)


    return (
        <div className="routine-single">
            <h3>Creator:</h3>
            <div>
                {routine.creatorName}
            </div>
            <h3>Name:</h3>
            <div>
                {routine.name}
            </div>
            <h3>Goal:</h3>
            <div>
                {routine.goal}
            </div>
            {routine.activities.map(activity => {
            return <ActivitiesSingle key={activity.id} activity={activity}/>
           })}
        </div>




    )
}
export default RoutineSingle;