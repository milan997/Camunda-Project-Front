import React from 'react';
import './forms.css';

const Task10 = () => {
    return (
        <form className="UserTaskForm">
            <h2>ПРИМЕДБЕ КОМСИЈЕ:</h2>
            <h3>ПРЕДСЕДНИК:</h3>
            <textarea type="text" name="primedbaPredsednik" readOnly ></textarea>
            <h3>ЧЛАН1:</h3>
            <textarea type="text" name="primedbaClan1" readOnly ></textarea>
            <h3>ЧЛАН2:</h3>
            <textarea type="text" name="primedbaClan2" readOnly ></textarea>
            <h3>ЧЛАН3:</h3>
            <textarea type="text" name="primedbaClan3" readOnly ></textarea>
            <div className="uslovDiv">
                <label for="uslov">Uslov</label>
                <input type="checkbox" name="uslov" />
            </div>
        </form>);
}

export default Task10;