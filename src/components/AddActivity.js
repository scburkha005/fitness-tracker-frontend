import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import ActivitiesSingle from "./ActivitiesSingle";
import ActivitiesForm from "./ActivitiesForm";
import { fetchActivities } from "../api/activitiesApi";

const AddActivity = ({ token }) => {
  const navigate = useNavigate();

  const { data: activities, isLoading } = useQuery('activities', async () => await fetchActivities());

  if (isLoading) {
    return 'Loading...'
  }

  return (
    <>
      <button onClick={() => navigate('/activities')}>Cancel</button>
      <ActivitiesForm token={token} />
      <div className="activities">
        {activities?.length > 0 && activities.map((activity) => {
          return (
            <ActivitiesSingle key={`${activity.id}-${activity.name}`}activity={activity} />
          )
        })}
      </div>
    </>
  )
}

export default AddActivity;