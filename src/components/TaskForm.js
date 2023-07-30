import React, { useState } from "react";
import "../styles/TaskForm.css";
import {v4 as uuidv4 } from 'uuid';
 
function TaskForm(props) {

    const [input, setInput] = useState('');

    const controlChange = e => {
        setInput(e.target.value)
    };

    const controlSend = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }

        props.onSubmit(newTask);

    };

    return (
        <form 
        className="task-form"
        onSubmit={controlSend}>
            <input
                className="task-input"
                type="text"
                placeholder="Ecrit une tâche"
                name="text"
                onChange={controlChange}/>
            <button 
                className="task-button"
                >
                Ajouter la Tâche!
            </button>
        </form>
    )
}
export default TaskForm;