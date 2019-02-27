import React from 'react';
import './forms.css';

const Task11 = () => {
    return (
        <form className="UserTaskForm">
            <label htmlFor="upload">Upload</label>
            <input type="file" name="upload" accept="application/pdf" required/>
        </form>);
}

export default Task11;