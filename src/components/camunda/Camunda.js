import React from 'react';
import TaskList from './tasklist/TaskList';
import WorkSpace from './workspace/WorkSpace';

import './Camunda.css';

class Camunda extends React.Component {
    state = {
        selectedTask: false,
    }

    selectTask = (task) => {
        this.setState({selectedTask: task});
    }

    render() {
        return (
            <main className="Camunda">
                <TaskList selectTask={this.selectTask} loadForm={this.loadForm} />
                <WorkSpace task={this.state.selectedTask} />

            </main>
        );
    }
}

export default Camunda;