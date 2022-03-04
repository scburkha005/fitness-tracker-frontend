import { useParams } from "react-router";
import { useQuery } from "react-query";
import * as api from '../api/activitiesApi';

const RoutinesByActivity = () => {
  const { activityId } = useParams();

  const { data: routines, isLoading } = useQuery(['routinesByActivity', activityId], async () => await api.getRoutinesByActivity(activityId));
  console.log('routines', routines)
  return (
    <>
      <div>{activityId}</div> 
    </>
  )
}

export default RoutinesByActivity;