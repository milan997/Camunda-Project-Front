import React from 'react';
// import axios from 'axios';
import Q2NA1102 from './forms/Q2_NA_11_02';
import Q2NA1102Readonly from './forms/Q2_NA_11_02_readonly';

import './FormContainer.css';
import axios from 'axios';

import { BASE_URL } from '../../../../ROUTES';
//const FAIL_ON_FIELD_NOT_FOUND = false;

const NAME_ATTR = "cam-variable-name";
// const TYPE_ATTR = "cam-variable-type";

class FormContainer extends React.Component {

    state = {
        form: null,
        formVariables: null,
    }

    componentDidMount() {
        // OVDE JE GRESKA this.props.taskId se menja ali se uvek renderuje ista komponenta
        
        this.getFormDataForTask(this.props.taskId)
            .then(response => {
                console.log('formKey: ', this.props.formKey)
                const form = this.getFormFromFormKey(this.props.formKey);
                this.setState({form: form, formVariables: response.data});
            })
            .catch(response =>console.log({response}));
    }

    componentDidUpdate() {
        // OVDEEEEEEEEEEEEEEE
        // u ovoj metodi treba ucitati novu formu i poslati zahtev ka form-variables
        // pre sam isto to pokusao ali je bio problem setState u componentDidUpdate sto onda napravi infinit petlju
        // sad malo menjamo - probaj obrisati state , koji ce nam kurate, i onda samo klasicno ajax i ucitas formu
        if(this.state.formVariables) 
            this.loadFormVariablesIntoForm();
    }

    loadFormVariablesIntoForm() {
        console.log({ formVariables: this.state.formVariables});
        const inputFields = document.querySelectorAll('#formHolder > form input');
        const inputFieldsArray = Array.from(inputFields);
        inputFieldsArray.forEach((field) => {
            field.value = this.state.formVariables[field.getAttribute(NAME_ATTR)] || '';
        });
    }

    getFormFromFormKey = (formKey) => {
        switch (this.props.formKey) {
            case '/Q2_NA_11-02.html': return <Q2NA1102 />; 
            case '/Q2_NA_11-02_readonly.html': return <Q2NA1102Readonly />; 
            default: console.log('form not found'); alert('form not found');
        }
    }

    getFormDataForTask = async (taskId) => {
        const GET_FORM_VARIABLES_URL = `${BASE_URL}/tasks/${taskId}/form-variables`;
        return await axios.get(GET_FORM_VARIABLES_URL);
    }

    handleFormSubmit = () => {
        
    }

    handlePopulateForm = () => {
        // ovo ce se brisati kasnije
        this.loadFormData();
    }

    render(){
        return (
            <div className="FormContainer">
                <div id="formHolder">
                    {this.state.form}
                </div>
                
                <button style={{ float: 'right' }}
                    name="submitForm"
                    value="submitForm"
                    type="submit"
                    onClick={this.handleFormSubmit}>
                    Submit Form
                </button>

                <button style={{ float: 'left' }}
                    name="populateForm"
                    value="populateForm"
                    type="populateForm"
                    onClick={this.handlePopulateForm}>
                    PopulateForm
                </button>
            </div>

           
        );
    }
}

export default FormContainer;
