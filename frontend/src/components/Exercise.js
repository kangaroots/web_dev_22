import React from 'react';
import { RiDeleteBin2Fill} from 'react-icons/ri';
import { GrEdit} from 'react-icons/gr';

function Exercise({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            {/* This will cause an error if an exercise without a date is added and makes it to the table list of exercises */}
            <td>{exercise.date.substring(0,10)}</td>
            <td><GrEdit onClick={() => onEdit(exercise)} /></td>
            <td><RiDeleteBin2Fill onClick={() => onDelete(exercise._id)} /></td>

        </tr>
    );
}

export default Exercise;