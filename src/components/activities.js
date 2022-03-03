import { useQuery } from 'react-query';
import { fetchActivities } from '../api/activitiesApi';
import ActivitiesSingle from './ActivitiesSingle';

const Activities = () => {

  const { data: activities, isLoading, error } = useQuery('activities', async () => {
    const data = await fetchActivities();
    return data;
  });

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
      {activities.length > 0 && activities.map((activity) => {
        return (
          <ActivitiesSingle key={`${activity.id}-${activity.name}`}activity={activity} />
        )
      })}
    </>
  )
}

export default Activities;