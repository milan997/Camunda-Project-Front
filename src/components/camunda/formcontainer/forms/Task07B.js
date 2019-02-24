import React from 'react';
import './forms.css';

const Task07B = () => {
    return (
        <form className="UserTaskForm">
            <h3>ТЕКСТ РАДА:</h3>
            <textarea type="text" name="tekstRada" readOnly ></textarea>

            <h3>КОМЕНТАРИ МЕНТОРА:</h3>
            <textarea type="text" name="komentariMentora" required></textarea>

            <label>Odluka</label>
            <select name="odluka" required>
                <option name="dorada">dorada</option>
                <option name="prihvacen">prihvacen</option>
                <option name="obustavi">obustavi</option>
            </select>
        </form>);
}

export default Task07B;