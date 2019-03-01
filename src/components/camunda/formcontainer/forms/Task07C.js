import React from 'react';
import './forms.css';

const Task07C = () => {
    return (
        <form className="UserTaskForm">
            <h2>МЕНТОР РАЗМАТРА ПРОДУЖЕЊЕ РОКА:</h2>

            <label htmlFor="rokZaIzradu" >Rok za izradu (minuti):</label>
            <input type="number" min="1" max="10" name="rokZaIzradu"></input>

            <div className="uslovDiv">
                <label htmlFor="uslov" >Odobri produzenje:</label>
                <input type="checkbox" name="uslov" />
            </div>
        </form>);
}

export default Task07C;