import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName]     = useState('');
    const [reps, setReps]     = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit]     = useState('lbs');
    const [date, setDate]     = useState('');
    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add to the collection</h2>
            <p>Log your workouts on this page. </p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset className="fields">
                    <legend>Which exercise are you adding?</legend>
                    <label htmlFor="name">Exercise name
                    <input
                        type="text"
                        placeholder="Name of the exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" 
                        required />
                    </label>

                    <label htmlFor="reps">Reps completed
                    <input
                        type="number"
                        min="0"
                        value={reps}
                        placeholder="Number of times"
                        onChange={e => setReps(e.target.value)} 
                        id="reps" 
                        required />
                    </label>

                    <label htmlFor="weight">Weight of weights used
                    <input
                        type="number"
                        min="0"
                        placeholder="Number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" 
                        required />
                    </label>

                    {/* // It was tricky to get the tags to be in the correct places, needed to be div, label, select, with name and etc. inside select.  */}

                    <label htmlFor="unit">
                        Choose a unit of measurement:
                        <select 
                            name="unit"
                            type="text" 
                            onChange={e => setUnit(e.target.value)}  
                            value={unit}
                            id="unit"
                            required >
                                
                            <option value="lbs">lbs</option>
                            <option value="kgs">kgs</option>
                            <option value="miles">miles</option>   
                        
                        </select>
                    </label>

                    <label htmlFor="date">Date the exercise was performed
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" 
                        required />
                    </label>
                    
                    <label htmlFor="submit">
                    <button
                        // type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddExercisePage;