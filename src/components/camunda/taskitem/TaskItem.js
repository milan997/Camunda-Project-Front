import React from 'react';
import './TaskItem.css';

class TaskItem extends React.Component {
    // TODO ovo sve mozda moze da se prebije u funkc komponentu. state nam ne treba 
    // state = {
    //     selected: this.props.selected,
    // }

    // selectTask = () => {
    //     this.setState({selected:true});
    //     this.props.selectTask(this.props.task);
    // }

    render() {
        const { assignee, createTime, name} = this.props.task;

        let className;
        if (this.props.selected) 
            className = "TaskItem flex-item selected";
        else
            className = "TaskItem flex-item";
        return (
            <div className={className} onClick={() => this.props.selectTask(this.props.task)}>
                <h3 style={{ float: 'left' }} className="taskTitle">{name}</h3>
                <span style={{ float: 'right ' }}>{assignee ? '♞' + assignee : 'unclaimed'}</span>
                <div style={{ clear: 'both ' }}></div>
                <p className="date">⧗{createTime}</p>
            </div>
        );
    }
}

export default TaskItem;