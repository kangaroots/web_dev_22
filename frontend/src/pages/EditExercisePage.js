import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

// Update an Exercise on the Edit Exercise Page

export const EditExercisePage = ({ exerciseToEdit }) => {
 
    const [name, setName]         = useState(exerciseToEdit.name);
    const [reps, setReps]         = useState(exerciseToEdit.reps);
    const [weight, setWeight]     = useState(exerciseToEdit.weight);
    const [unit, setUnit]         = useState(exerciseToEdit.unit);
    const [date, setDate]         = useState(exerciseToEdit.date.toLocaleString("en-US").slice(0,10));
    
    // Print the date
    // console.log(date.toLocaleString("en-US").slice(0,10))

    const history = useHistory();

    // editExercise() makes an HTTP request to the endpoint PUT/ exercises
    const editExercise = async () => {
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                reps: reps, 
                weight: weight,
                unit: unit,
                date:date
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            alert("Success! Document edited.");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit an exercise in the collection</h2>
            <p>Do you need to edit anything in your exercise log?</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Edit below and save</legend>
                    <label htmlFor="name">Exercise name
                    <input
                        type="text"
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
                        // value={date.toLocaleString("en-US").slice(0,10)}
                        value={date}
                        // placeholder="Set Date"
                        placeholder={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date"
                        required />
                    </label>

                    <label htmlFor="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                    >Save</button> Update the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;