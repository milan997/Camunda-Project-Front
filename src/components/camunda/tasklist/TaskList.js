import React from 'react';
import axios from 'axios';

import { MY_TASKS_URL, START_PROCESS_URL} from '../../../ROUTES';

import TaskItem from './taskitem/TaskItem';
import './TaskList.css';

class TaskList extends React.Component {
    state = { 
        tasks: [] ,
        selectedTaskId: null,
    };

    componentDidMount() {
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
        const userIsStudent = (loggedInUser != null && loggedInUser.groups[0] === "student");
        if (userIsStudent)
            this.refs.startProcessBtn.style.display = 'block';

        this.updateTasks();
    }

    updateTasks = () => {
        axios.get(MY_TASKS_URL, { withCredentials: true })
            .then(response => {
                this.setState({ tasks: response.data });
            })
            .catch(response => {

            });
    }

    handleStartProcess = () => {
        axios.post(START_PROCESS_URL, {}, { withCredentials: true })
            .then((response) => {
                this.updateTasks();
            })
            .catch((response) => console.log(response));
    }

    selectTask = (task) => {
        this.setState({ selectedTaskId: task.id});
        this.props.selectTask(task);
    }

    render() {
        return (
            <div className="TaskList">
                <button ref="startProcessBtn" style={{ display: 'none' }} className="start-process-btn" onClick={this.handleStartProcess}>Zapocni prijavu</button>
                <div className="flex-container">

                    {this.state.tasks.map(task => {
                        const selected = task.id === this.state.selectedTaskId;
                        return (
                        <TaskItem 
                            key={task.id} 
                            selected={selected} 
                            task={task} 
                            selectTask={this.selectTask}/>
                    )})}
                </div>
            </div>
        );
    }
}

export default TaskList;