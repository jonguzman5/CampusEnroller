import React, { Component } from 'react'
import '../../css/Students.css'

class NewStudentForm extends Component {
  constructor(props){
    super(props)
  }

  handleSubmit = () => {
    console.log('Adding new student to database...');
  }

  handleChange = (e) => {
    console.log(e.target.value);
    //this.setState({school: e.target.value});
  }

  render(){
    return (
      <div className="newstudentform-container">
        <form onSubmit={this.handleSubmit}>
          <h1>New Student Form</h1>
          <h2>Student Name</h2>
          <input type='text' onChange={this.handleChange}/>
          <input type='submit' value="Add Student"/> {/*ADD REDIRECT TO /STUDENTS*/}
        </form>
      </div>
    );
  }
}

export default NewStudentForm;
