import { useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import * as api from '../api/activitiesApi';
import { updateState } from './utils';
import { useNavigate } from 'react-router';

const ActivitiesForm = ({ token }) => {
  const [activitiesFormData, setActivitiesFormData] = useState({name: '', description: ''});
  const [errorMessage, setErrorMessage] = useState('');
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleChange = (e) => {
    updateState(e, activitiesFormData, setActivitiesFormData);
  }

  //api call handler
  const { mutate } = useMutation(api.addActivity, {
    onError: ({ data: { message }}) => {
      //rebuild duplicate activity message
      if (message === 'duplicate key value violates unique constraint "activities_name_key"') {
        message = 'Activity already exists'
      }
      setErrorMessage(message);
    },
    onSuccess: (data) => {
      //update queryClient cache with the new activity and navigate back to /activities
      const currActivities = queryClient.getQueryData(['activities'])
      queryClient.setQueryData(['activities'], {...currActivities, data})
      navigate('/activities')
    }
  })

  const { name, description } = activitiesFormData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mutateData = {...activitiesFormData, token}
    mutate(mutateData)
  }

  return (
    <form className='activities-form' onSubmit={handleSubmit}>
      {errorMessage && <div>{errorMessage}</div>}
      <input placeholder='name' value={name} onChange={handleChange}/>
      <input placeholder='description' value={description} onChange={handleChange}/>
      <button>Submit</button>
    </form>
  )
}

export default ActivitiesForm;