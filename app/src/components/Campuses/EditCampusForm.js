import React, { Component } from 'react'
import '../../css/Campuses.css'

class EditCampusForm extends Component {
  constructor(props){
    super(props)
  }

  handleSubmit = () => {
    console.log('editng school in database...');
  }

  handleChange = (e) => {
    console.log(e.target.value);
    //this.setState({school: e.target.value});
  }

  render(){
    return (
      <div className="editcampusform-container">
        <form onSubmit={this.handleSubmit}>
          <h1>Edit Campus Form</h1>
          <label>Campus Name <input type='text' onChange={this.handleChange}/></label>
          <label>Campus Location <input type='text' onChange={this.handleChange}/></label>
          <label>Campus Image URL <input type='text' onChange={this.handleChange}/></label>
          <label>Campus Description <input type='text' onChange={this.handleChange}/></label>
          <input type='submit' value="Save Changes"/> {/*ADD REDIRECT TO /CAMPUSES*/}
        </form>
      </div>
    );
  }
}

export default EditCampusForm;
