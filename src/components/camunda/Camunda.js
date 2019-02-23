import React from 'react';
import axios from 'axios';


import WorkSpace from './workspace/WorkSpace';
import TaskItem from './taskitem/TaskItem';
import { MY_TASKS_URL, START_PROCESS_URL } from '../../ROUTES';

import './Camunda.css';

class Camunda extends React.Component {
    state = {
        tasks: [],
        selectedTask: false,
    }

    selectTask = (task) => {
        this.setState({selectedTask: task});
    }

    componentDidMount() {
        // ako je ulogovani user student, dajemo mu dugme da pokrene proces
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
            .catch(response => console.log({response}));
    }

    handleStartProcess = () => {
        axios.post(START_PROCESS_URL, {}, { withCredentials: true })
            .then((response) => {
                this.updateTasks();
            })
            .catch((response) => console.log(response));
    }


    render() {
        return (
            <main className="Camunda">
            
                <div className="TaskList">
                    <button ref="startProcessBtn" style={{ display: 'none' }} className="start-process-btn" onClick={this.handleStartProcess}>Zapocni prijavu</button>
                    <div className="flex-container">
                        {this.state.tasks.map(task => {
                            const selected = task.id === this.state.selectedTask.id;
                            return (
                                <TaskItem
                                    key={task.id}
                                    selected={selected}
                                    task={task}
                                    selectTask={this.selectTask} />
                            )
                        })}
                    </div>
                </div>


                <WorkSpace task={this.state.selectedTask} />

            </main>
        );
    }
}

export default Camunda;