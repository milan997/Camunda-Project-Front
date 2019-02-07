import React from 'react';
import TaskList from './tasklist/TaskList';
import WorkSpace from './workspace/WorkSpace';

import './Camunda.css';

class Camunda extends React.Component {
    state = {
        loadedForm: null,
    }

    loadForm = (form) => {
        // nece biti bas ovako lako, ne znam u kom obliku je form
        this.setState({loadedForm: form});
    }

    render() {
        return (
            <main className="Camunda">
                <TaskList loadForm={this.loadForm}/>
                <WorkSpace form={this.state.loadedForm}/>
            </main>
        );
    }
}

export default Camunda;