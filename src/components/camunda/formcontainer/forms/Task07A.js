import React from 'react';
import './forms.css';

const Task07A = () => {
    return (
        <form className="UserTaskForm">
            <h3>ТЕКСТ РАДА:</h3>
            <textarea type="text" name="tekstRada" required ></textarea>

            <h3>КОМЕНТАРИ МЕНТОРА:</h3>
            <textarea type="text" name="komentariMentora" readOnly></textarea>
        </form>);
}

export default Task07A;