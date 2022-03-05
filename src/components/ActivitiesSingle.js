import { useNavigate } from "react-router";

const ActivitiesSingle = ({ activity: { id, name, description, count, duration } }) => {
  const navigate = useNavigate();
  //handle capitalization
  name = name.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');

  return (
    <div className='singleActivity'>
      <div>Name: <span onClick={() => navigate(`/activities/${id}/routines`)}>{name}</span></div>
      <div>{`Description: ${description}`}</div>
      {count && <div>{`Count: ${count}`}</div>}
      {duration && <div>{`Duration: ${duration}`}</div>}
    </div>
  )
}

export default ActivitiesSingle;