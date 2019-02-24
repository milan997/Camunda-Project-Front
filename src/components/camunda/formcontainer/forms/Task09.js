import React from 'react';
import './forms.css';

const Task09 = () => {
    return (
        <form className="UserTaskForm">
            <h2>ПРИМЕДБЕ КОМСИЈЕ:</h2>
            <h3>ПРЕДСЕДНИК:</h3>
            <textarea type="text" name="primedbaPredsednik" required ></textarea>
            <h3>ЧЛАН1:</h3>
            <textarea type="text" name="primedbaClan1" required ></textarea>
            <h3>ЧЛАН2:</h3>
            <textarea type="text" name="primedbaClan2" required ></textarea>
            <h3>ЧЛАН3:</h3>
            <textarea type="text" name="primedbaClan3" required ></textarea>
        </form>);
}

export default Task09;