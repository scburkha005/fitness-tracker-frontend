const ActivitiesSingle = ({ activity: { id, name, description} }) => {
  //handle capitalization
  name = name.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');

  return (
    <div className='singleActivity'>
      <div>{`Name: ${name}`}</div>
      <div>{`Description: ${description}`}</div>
    </div>
  )
}

export default ActivitiesSingle;