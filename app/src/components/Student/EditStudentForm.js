import React, { Component } from 'react'
import '../../css/Campuses.css'

class EditStudentForm extends Component {
  constructor(props){
    super(props)
  }

  handleSubmit = () => {
    console.log('editing student in database...');
  }

  handleChange = (e) => {
    console.log(e.target.value);
    //this.setState({school: e.target.value});
  }

  render(){
    return (
      <form className="new-campus-form" onSubmit={this.handleSubmit}>
        <h1>Edit Student Form</h1>
        <label>Student Name <input type='text' onChange={this.handleChange}/></label>
        <label>GPA <input type='text' onChange={this.handleChange}/></label>
        <label>Student URL <input type='text' onChange={this.handleChange}/></label>
        <input type='submit' value="Save Changes"/> {/*ADD REDIRECT TO /CAMPUSES*/}
      </form>
    );
  }
}

export default EditStudentForm;
