import { useQuery } from 'react-query';
import { fetchActivities } from '../api/activitiesApi';

const Activities = () => {

  const { data, isLoading } = useQuery('activities', async () => {
    const data = await fetchActivities();
    return data;
  });

  if (isLoading) {
    return "Loading..."
  }
  console.log(data)
  return (
    <h2>hi</h2>
  )
}

export default Activities;