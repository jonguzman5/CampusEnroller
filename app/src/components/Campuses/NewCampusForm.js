import React, { Component } from 'react'
import '../../css/Campuses.css'

class NewCampusForm extends Component {
  constructor(props){
    super(props)
  }

  handleSubmit = () => {
    console.log('Adding new school to database...');
  }

  handleChange = (e) => {
    console.log(e.target.value);
    //this.setState({school: e.target.value});
  }

  render(){
    return (
      <form className="new-campus-form" onSubmit={this.handleSubmit}>
        <h1>New Campus Form</h1>
        <h2>Campus Name</h2>
        <input type='text' onChange={this.handleChange}/>
        <input type='submit' value="Add Campus"/> {/*ADD REDIRECT TO /CAMPUSES*/}
      </form>
    );
  }
}

export default NewCampusForm;
