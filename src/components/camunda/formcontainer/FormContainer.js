import React from 'react';
import axios from 'axios';

import getFormFromFormKey from './forms/forms';

import { BASE_URL, DELETE_PROCESS_URL, FILE_URL } from '../../../ROUTES';

import './FormContainer.css';

const NAME_ATTR = "name";
const CHOICES_ATTR = "cam-choices"

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
    
        this.state = {};
        this.state.loggedInUser = loggedInUser;
        this.state.userIsAdmin = loggedInUser && loggedInUser.groups.includes("camunda-admin")
        this.state.userIsAssigneeOrAdmin = this.props.task.assignee === loggedInUser.id || this.state.userIsAdmin;
    }

    componentDidMount() {
        if (this.state.userIsAdmin)
            this.refs.deleteProcessBtn.style.display = 'block';
        if (this.state.userIsAssigneeOrAdmin) 
            this.refs.submitFormBtn.style.display = 'block';
    
        this.componentDidUpdate();
    }

    componentDidUpdate() {
        const GET_FORM_VARIABLES_URL = `${BASE_URL}/tasks/${this.props.task.id}/form-variables`;
        axios.get(GET_FORM_VARIABLES_URL, {withCredentials:true})
            .then(response => this.loadFormVariablesIntoForm(response.data))
            .catch(response => console.log({ response }));
    }

    loadFormVariablesIntoForm(formVariables) {
        console.log({ formVariables})
        const inputFields = Array.from(document.querySelectorAll('#formHolder > form input, #formHolder > form textarea'));
        inputFields.forEach(field => field.value = formVariables[field.getAttribute(NAME_ATTR)] || field.value);

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
                // u slucaju da je polje clanKomsije2 ili 3 dodajemo optional
                if (field.name === "clanKomisije2" || field.name === "clanKomisije3") {
                    const option = document.createElement("option");
                    option.value = 'null';
                    option.text = '';
                    field.add(option, null);
                }
                
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

        const downloadLink = document.querySelector('#formHolder a.downloadLink');
        const variableUpload = formVariables["upload"];

        if (downloadLink && variableUpload) {
            const downloadUrl = FILE_URL + variableUpload;
            downloadLink.href = downloadUrl || "http://error.com";
        }
        
        const primedbe = Array.from(document.querySelectorAll('#formHolder textarea.primedba'));
        primedbe.forEach((primedba) => {
            const assignee = formVariables[primedba.getAttribute('data-assignee')];
            if (this.state.loggedInUser.id === assignee || (assignee && this.state.userIsAdmin)) 
                primedba.removeAttribute('readOnly'); 
        });

        this.refs.formHolder.style.display = 'block';
    }

    handleFormSubmit = (event) => {
        const form = document.querySelector('#formHolder > form');
        if (!form.checkValidity()) {
           alert('Form is not valid!');
           return;
        } 

        const fileInputField = form.querySelector('input[type="file"]');
        if (fileInputField) {
            const submitFileUrl = `${BASE_URL}/tasks/${this.props.task.id}/submit-file`;
            const formData = new FormData();
            formData.append("upload", fileInputField.files[0]);
            axios.post(submitFileUrl, formData, {
                withCredentials: true,
                headers: {'Content-Type': 'multipart/form-data'}
            }).then(this.props.updateTasks)
                .catch(response => console.log(response));
            return;
        }

        // check if some selects are same and react!
        const selects = Array.from(form.querySelectorAll('select[cam-choices="profesori"]'))
            .filter(select => select.value !== 'null');
        const selectsDistinctValues = new Set(selects.map(select => select.value));
        if (selects.length !== selectsDistinctValues.size) {
            alert('Izabrali ste dva puta istog profesora');
            return;
        }

        const elements = form.querySelectorAll("input, select, textarea");
        const formData = {};
        for (let i = 0; i < elements.length; ++i) {
            const { name, value, readOnly, disabled, type, checked } = elements[i];
            if (name && value && !readOnly && !disabled && value !== 'null') {
                formData[name] = type === "checkbox" ? checked : value;
            }     
        }
        
        console.log({formData})
        const submitFormUrl = `${BASE_URL}/tasks/${this.props.task.id}/submit-form`;
        axios.post(submitFormUrl, formData, {withCredentials:true})
            .then(this.props.updateTasks)
            .catch(response => console.log(response));
    }

    handleDeleteProcess = () => {
        const url = `${DELETE_PROCESS_URL}/${this.props.task.processInstanceId}`;
        axios.delete(url, { withCredentials: true })
            .then(this.props.updateTasks)
            .catch(response => console.log({ response }));
    }

    render(){
        const form = getFormFromFormKey(this.props.formKey); 
    
        return (
            <div className="FormContainer">
                <div id="formHolder" ref="formHolder" style={{display:'none'}}>
                    {form}
                </div>
                <div style={{ clear: "both" }}></div>
                <button ref="submitFormBtn" style={{ float: 'right', display: 'none' }}
                    name="submitForm"
                    onClick={this.handleFormSubmit}>
                    Submit Form
                </button>
                <button ref="deleteProcessBtn" style={{ float: 'left', display: 'none' }}
                    name="deleteProcess"
                    onClick={this.handleDeleteProcess}>
                    DELETE TASK
                </button>
            </div> 
        );
    }
}

export default FormContainer;