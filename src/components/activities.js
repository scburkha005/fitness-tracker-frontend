import { useQuery } from 'react-query';
import { fetchRoutines } from '../api/activitiesApi';

const Activities = () => {

  const { data, isLoading } = useQuery('activities', async () => {
    const data = await fetchRoutines();
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