const RoutineSingle = ({routine}) => {




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
        </div>




    )
}
export default RoutineSingle;