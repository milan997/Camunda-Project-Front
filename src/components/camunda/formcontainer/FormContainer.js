import React from 'react';
import axios from 'axios';

import getFormFromFormKey from './forms/forms';

import { BASE_URL } from '../../../ROUTES';

import './FormContainer.css';

const NAME_ATTR = "name";
const CHOICES_ATTR = "cam-choices"

class FormContainer extends React.Component {
    
    componentDidMount() { this.componentDidUpdate() }

    componentDidUpdate() {
        const GET_FORM_VARIABLES_URL = `${BASE_URL}/tasks/${this.props.task.id}/form-variables`;
        
        axios.get(GET_FORM_VARIABLES_URL, {withCredentials:true})
            .then(response => this.loadFormVariablesIntoForm(response.data))
            .catch(response => console.log({ response }));
    }

    loadFormVariablesIntoForm(formVariables) {
        const inputFields = Array.from(document.querySelectorAll('#formHolder > form input, #formHolder > form textarea'));
        inputFields.forEach((field) => {
            console.log({ field})
            console.log(formVariables[field.getAttribute(NAME_ATTR)]);
            field.value = formVariables[field.getAttribute(NAME_ATTR)] || field.value;
        });

        const selectFields = Array.from(document.querySelectorAll('#formHolder > form select'));
        selectFields.forEach((field) => {
            // ako select polje ima cam-choices attribut, dodeljumo mu vrednosti 
            const camChoicesValue = field.getAttribute(CHOICES_ATTR);
            const list = formVariables[camChoicesValue];
            if (camChoicesValue && list) {
                // removing elements added before
                while (field.firstChild)
                    field.removeChild(field.firstChild);
                //console.log({list})
                for(let entry of list) {
                    //console.log({entry})
                    const option = document.createElement("option");
                    option.value = entry;
                    option.text = entry;
                    field.add(option, null);
                }  
            }
            // ako varijabla postoji dodeljujemo je elementu forme
            const processVariable = formVariables[field.getAttribute(NAME_ATTR)];
            if (processVariable)
                field.value = processVariable;
        });

        this.refs.formHolder.style.display = 'block';
    }

    handleFormSubmit = (event) => {
        const form = document.querySelector('#formHolder > form');
        if (!form.checkValidity()) {
           alert('Form is not valid!');
           return;
        } 

        const elements = form.querySelectorAll("input, select, textarea");
        const formData = {};
        for (let i = 0; i < elements.length; ++i) {
            const { name, value, readOnly, disabled} = elements[i];
            if (name && value && !readOnly && !disabled) 
                formData[name] = value;
        }
        console.log({formData})
        const submitFormUrl = `${BASE_URL}/tasks/${this.props.task.id}/submit-form`;
        axios.post(submitFormUrl, formData, {withCredentials:true})
            .then(response => {
                this.props.formSubmitted();
            })
            .catch(response => console.log(response));
    }

    render(){
        const form = getFormFromFormKey(this.props.formKey); 
    
        return (
            <div className="FormContainer">
                <div id="formHolder" ref="formHolder" style={{display:'none'}}>
                    {form}
                </div>
                <div style={{ clear: "both" }}></div>
                <button style={{ float: 'right' }}
                    name="submitForm"
                    onClick={this.handleFormSubmit}>
                    Submit Form
                </button>
            </div>

           
        );
    }

    // getFormFromFormKey = (formKey) => {
    //     console.log({ formKey })
    //     switch (formKey) {
    //         case '/Task01.html': return <Task01 />;
    //         // case '/Task02.html': return <Task02 />;
    //         // case '/Task03.html': return <Task03 />;
    //         // case '/Task04.html': return <Task04 />;
    //         // case '/Task05.html': return <Task05 />;
    //         // case '/Task06.html': return <Task06 />;
    //         // case '/Task07.html': return <Task07 />;
    //         // case '/Task08.html': return <Task08 />;
    //         // case '/Task09.html': return <Task09 />;
    //         default: console.log('form not found'); alert('form not found');
    //     }
    // }

}

export default FormContainer;
