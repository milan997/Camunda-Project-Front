import React from 'react';
import './TaskItem.css';

class TaskItem extends React.Component {
    render() {
        return (
            <div className="TaskItem">
                <h3>Naslov Taska</h3>
                <h4>Vreme izvrsenja</h4>
                <span>opis taska</span>
            </div>
        );
    }
}

export default TaskItem;