import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { fetchActivities } from '../api/activitiesApi';
import ActivitiesSingle from './ActivitiesSingle';

const Activities = ({ token }) => {
  const navigate = useNavigate();

  const { data: activities, isLoading, error } = useQuery('activities', async () => await fetchActivities());

  if (isLoading) {
    return "Loading..."
  }

  if (error) {
    return (
      <>
        <h2>Uh Oh! Something went wrong</h2>
        <h2>{error.response.status}: {error.response.data.message} :[</h2>
      </>
      )
  }
  return (
    <>
      {token && <button onClick={() => navigate('/activities/add')}>Add Activity</button>}
      {activities.length > 0 && activities.map((activity) => {
        return (
          <ActivitiesSingle key={`${activity.id}-${activity.name}`}activity={activity} />
        )
      })}
    </>
  )
}

export default Activities;