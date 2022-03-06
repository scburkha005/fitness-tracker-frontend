import React, { useEffect } from "react";
import { useNavigate } from 'react-router';
import {fetchRoutines} from '../api';
import RoutineSingle from './routineSingle';
import './routines.css';

const Routines = ({token, user, routines, setRoutines, setEditRoutine}) => {
    const navigate = useNavigate();
    
    const getRoutines = async () => {
        setRoutines(await fetchRoutines())  
    }
    useEffect(() => {        
        getRoutines()
    }, [])
    
return (
    <div className='routines'>
    {token && <button onClick={()=> {
        navigate('/routines/add')
    } }>Add Routine</button>}
    {routines.map(routine => {

        
        return (
           <RoutineSingle key={routine.id} routine={routine} user={user} setEditRoutine={setEditRoutine} token={token} routines={routines} setRoutines={setRoutines} />
        )
    })}
    </div>


)
}
export default Routines;