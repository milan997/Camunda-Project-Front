import React from 'react';

import './WorkSpace.css';
// import { FORM_BASE_URL } from '../../../ROUTES';

import FormContainer from './formcontainer/FormContainer';

class WorkSpace extends React.Component {

    // TODO MOZDA SE I OVO MOZE SKRISIT u funkcionalnu kompnentu
    state = {
        task: this.props.task,
    }

    // componentDidMount() {
    //     if (this.props.task) {
    //         console.log(this.props.task)
    //         this.loadForm(this.props.task.formKey);
    //     }  
    // } 

    render() {
        let output = <div className="WorkSpace"></div>;
        if (this.props.task) {
            const { id, name, createTime, assignee, formKey } = this.props.task;
            //const formUrl = FORM_BASE_URL + formKey.replace('-', '_'); 
            output = (
                <div className="WorkSpace">
                    <span style={{ float: 'right' }}>{assignee ? '♞' + assignee : 'unclaimed'}</span>
                    <h3 style={{ float: 'left' }} className="title">{name}</h3>
                    <div style={{clear: 'both'}}/>
                    <p className="date">⧗{createTime}</p>
                    <FormContainer taskId={id} formKey={formKey} />
                </div>
            );
        }
        return output;
    }
}



export default WorkSpace;