import React, {useState, useEffect} from "react";
import {fetchRoutines} from '../api';
import RoutineSingle from './routineSingle';
const Routines = () => {
    const [routines, setRoutines] = useState([])
    const getRoutines = async () => {
        setRoutines(await fetchRoutines())  
    }
    useEffect(() => {        
        getRoutines()
    }, [])
    
return (
    <>
    {routines.map(routine => {

        
        return (
           <RoutineSingle key={routine.id} routine={routine}/>
        )
    })}
    </>


)
}
export default Routines;