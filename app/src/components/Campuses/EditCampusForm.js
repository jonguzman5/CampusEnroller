import React, { Component } from 'react'
import '../../css/Campuses.css'

class EditCampusForm extends Component {
  constructor(props){
    super(props)
  }

  handleSubmit = () => {
    console.log(this.props.id)
  }

  handleChange = (e) => {
    console.log(e.target.value);
    console.log(this.props.id)
    //this.setState({school: e.target.value});
  }

  render(){
    return (
      <div className="editcampusform-container">
        <form onSubmit={this.handleSubmit}>
          <h1>Edit Campus Form</h1>
          <label>Campus Name <input type='text' placeholder={this.props.name} onChange={this.handleChange}/></label>
          <label>Campus Location <input type='text' placeholder={this.props.address} onChange={this.handleChange}/></label>
          <label>Campus Image URL <input type='text' placeholder={this.props.imageurl} onChange={this.handleChange}/></label>
          <label>Campus Description <input type='text' placeholder={this.props.description} onChange={this.handleChange}/></label>
          <input className="hide" name="id" value={this.props.id} readOnly></input>
          <input type='submit' value="Save Changes"/> {/*ADD REDIRECT TO /CAMPUSES*/}
        </form>
      </div>
    );
  }
}

export default EditCampusForm;
