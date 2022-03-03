import { useQuery } from 'react-query';
import { fetchActivities } from '../api/activitiesApi';
import ActivitiesSingle from './ActivitiesSingle';

const Activities = () => {

  const { data: activities, isLoading } = useQuery('activities', async () => {
    const data = await fetchActivities();
    return data;
  });

  if (isLoading) {
    return "Loading..."
  }
  console.log(activities)
  return (
    <>
      {activities.length > 0 && activities.map((activity) => {
        return (
          <ActivitiesSingle activity={activity} />
        )
      })}
    </>
  )
}

export default Activities;