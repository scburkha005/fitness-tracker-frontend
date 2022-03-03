import React, {useState, useEffect} from "react";
import {fetchRoutines} from '../api';
import {RoutineSingle} from 'RoutineSingle';
const Routines = () => {
    const [routines, setRoutines] = useState([])
    const getRoutines = async () => {
        setRoutines(await fetchRoutines())  
    }
    useEffect(() => {        
        getRoutines()
    }, [])
    console.log(routines)
return (
    <>
    {routines.map(routine => {

        console.log(routine)
        return (
            <>
            <h3>Creator:</h3>
            <div>
                {routine.creatorName}
            </div>
            <h3>Name:</h3>
            <div>
                {routine.name}
            </div>
            <h3>Goal:</h3>
            <div>
                {routine.goal}
            </div>
            </>
        )
    })}
    </>


)
}
export default Routines;