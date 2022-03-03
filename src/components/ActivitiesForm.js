import { useState } from 'react';
import { useMutation } from 'react-query';
import * as api from '../api/activitiesApi';
import { updateState } from './utils';

const ActivitiesForm = ({ token }) => {
  const [activitiesFormData, setActivitiesFormData] = useState({name: '', description: ''});

  const handleChange = (e) => {
    updateState(e, activitiesFormData, setActivitiesFormData);
  }

  const { mutate } = useMutation(api.addActivity, {
    onSuccess: (data) => {
      console.log(data)
    }
  })

  const { name, description } = activitiesFormData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mutateData = {...activitiesFormData, token}
    mutate(mutateData)
  }
  console.log(activitiesFormData)
  return (
    <form className='activities-form' onSubmit={handleSubmit}>
      <input placeholder='name' value={name} onChange={handleChange}/>
      <input placeholder='description' value={description} onChange={handleChange}/>
      <button>Submit</button>
    </form>
  )
}

export default ActivitiesForm;