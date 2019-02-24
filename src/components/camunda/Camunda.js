import React from 'react';
import axios from 'axios';


import FormContainer from './formcontainer/FormContainer';
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

    formSubmitted = () => {
        this.updateTasks();
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
                this.setState({ tasks: response.data, selectedTask: false });
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
        let workspace = <div className="WorkSpace"></div>;
        if (this.state.selectedTask) {
            const { name, createTime, assignee, formKey } = this.state.selectedTask;
            workspace = (
                <div className="WorkSpace">
                    <span style={{ float: 'right' }}>{assignee ? '♞' + assignee : 'unclaimed'}</span>
                    <h3 style={{ float: 'left' }} className="title">{name}</h3>
                    <div style={{ clear: 'both' }} />
                    <p className="date">⧗{createTime}</p>
                    <FormContainer formSubmitted={this.formSubmitted} task={this.state.selectedTask} formKey={formKey} />
                </div>
            );
        }
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

                {workspace}
                
    
            </main>
        );
    }
}

export default Camunda;