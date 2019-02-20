import React from 'react';
import './TaskItem.css';

class TaskItem extends React.Component {
    render() {
        console.log(this.props.task);
        const { assignee, createTime, name} = this.props.task;
        return (
            <div className="TaskItem flex-item">
                <h3 style={{ float: 'left' }} className="taskTitle">{name}</h3>
                <span style={{ float: 'right ' }}>{assignee ? assignee : 'unclaimed'}</span>
                <div style={{ clear: 'both ' }}></div>
                <p className="date">⧗{createTime}</p>
            </div>
        );
    }
}

export default TaskItem;