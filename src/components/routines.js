import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router';
import {fetchRoutines} from '../api';
import RoutineSingle from './routineSingle';
const Routines = ({token}) => {
    const navigate = useNavigate();
    const [routines, setRoutines] = useState([])
    
    const getRoutines = async () => {
        setRoutines(await fetchRoutines())  
    }
    useEffect(() => {        
        getRoutines()
    }, [])
    
return (
    <>
    {token && <button onClick={()=> {
        navigate('/routines/add')
    } }>Add Routine</button>}
    {routines.map(routine => {

        
        return (
           <RoutineSingle key={routine.id} routine={routine}/>
        )
    })}
    </>


)
}
export default Routines;