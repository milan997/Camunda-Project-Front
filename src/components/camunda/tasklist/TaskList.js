import React from 'react';
import axios from 'axios';

import { MY_TASKS_URL} from '../../../ROUTES';

import TaskItem from './taskitem/TaskItem';
import './TaskList.css';

class TaskList extends React.Component {

    state = { tasks: [] };

    componentDidMount() {
        axios.get(MY_TASKS_URL, { withCredentials: true })
            .then(response => {
                console.log(response.data);
                this.setState({tasks: response.data});  
            })
            .catch(response => {

            });
    }

    render() {
        return (
            <div className="TaskList flex-container">
                {this.state.tasks.map(task => (
                    <TaskItem key={task.id} task={task}/>
                ))}
            </div>
        );
    }
}

export default TaskList;