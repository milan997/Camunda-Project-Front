import React from 'react';
import './forms.css';

const Task09 = () => {
    return (
        <form className="UserTaskForm">
            <h2>ПРИМЕДБЕ КОМИСИЈЕ:</h2>
            <h3>ПРЕДСЕДНИК:</h3>
            <textarea className="primedba" type="text" name="primedbaPredsednik" data-assignee="predsednikKomisije" readOnly ></textarea>
            <h3>ЧЛАН1:</h3>
            <textarea className="primedba" type="text" name="primedbaClan1" data-assignee="clanKomisije1" readOnly ></textarea>
            <h3>ЧЛАН2:</h3>
            <textarea className="primedba" type="text" name="primedbaClan2" data-assignee="clanKomisije2" readOnly ></textarea>
            <h3>ЧЛАН3:</h3>
            <textarea className="primedba" type="text" name="primedbaClan3" data-assignee="clanKomisije3"readOnly ></textarea>
        </form>);
}

export default Task09;