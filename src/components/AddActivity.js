import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQueryClient } from "react-query";
import ActivitiesSingle from "./ActivitiesSingle";
import ActivitiesForm from "./ActivitiesForm";
import { fetchActivities } from "../api/activitiesApi";

const AddActivity = ({ token }) => {
  const navigate = useNavigate();
  //queryClient allows us to access our "global" scope cache
  const queryClient = useQueryClient();

  const activities = queryClient.getQueryData('activities') || [];

  // How are we going to properly fetch the data from the queryClient when the page
  // is manually refreshed during an add, do we need to just make a new query?
  //
  // const refetch = async () => {
  //   const data = await queryClient.fetchQuery('activities', fetchActivities);
  //   console.log(data)
  // }

  // useEffect(() => {
  //   refetch();
  // }, [])

  return (
    <>
      <button onClick={() => navigate('/activities')}>Cancel</button>
      <ActivitiesForm token={token} />
      {activities.length > 0 && activities.map((activity) => {
        return (
          <ActivitiesSingle key={`${activity.id}-${activity.name}`}activity={activity} />
        )
      })}
    </>
  )
}

export default AddActivity;