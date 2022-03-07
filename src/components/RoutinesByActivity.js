import { useParams } from "react-router";
import { useQuery } from "react-query";
import * as api from '../api/activitiesApi';
import RoutineSingle from "./routineSingle";

const RoutinesByActivity = () => {
  const { activityId } = useParams();

  const { data: routines, isLoading } = useQuery(['routinesByActivity', activityId], async () => await api.getRoutinesByActivity(activityId));

  if (isLoading) {
    return "Loading..."
  }

  return (
    <div className='routines'>
      {
        routines?.length > 0 ?
        routines.map((routine) => {
          return (
            <RoutineSingle routine={routine}/>
          )
        })
        : <div>No Routines exist with that activity</div>
      }
    </div>
  )
}

export default RoutinesByActivity;