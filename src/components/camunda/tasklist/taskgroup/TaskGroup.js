import React from 'react';
import TaskItem from './taskitem/TaskItem';
import './TaskGroup.css';

class TaskGroup extends React.Component {
    render() {
        return (
            <div className="TaskGroup">
                <h2>Group Title</h2>
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </div>
        );
    }
}

export default TaskGroup;