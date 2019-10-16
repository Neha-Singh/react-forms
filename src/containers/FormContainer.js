import React, {Component} from 'react';

import CheckBox from '../components/Checkbox';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import TextArea from '../components/TextArea';


class FormContainer extends Component {
    constructor(props){
    super(props)
    this.State = {
    newUser : {
        name:'',
        email:'',
        age:'',
        gender:'',
        expertise:'',
        about:''
    },
    genderOptions:['Male', 'Female', 'Others'],
    skillOptions:['Programming','developement','Design','Testing']

    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);

    }

    handleFormSubmit(){
            // Form submission logic

    }

    handleClearForm(){
            // logic for resetting the form

    }

    render(){
        return(
            <form className="container" onSubmit = {this.handleFormSubmit} >
            <Input /> {/*Name of the user */}
            <Input /> {/* Age of the user */}
            <Select />  {/* Gender Selection */}
            <CheckBox /> {/* List of Skills (eg. Programmer, developer) */}
            <TextArea /> {/* About you */}
            <Button /> { /*Submit */ }
            <Button /> {/* Clear the form */}
            </form>
        )
    }




} 

export default FormContainer