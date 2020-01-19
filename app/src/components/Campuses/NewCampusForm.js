import React, { Component } from 'react'
import '../../css/Campuses.css'

class NewCampusForm extends Component {
  constructor(props){
    super(props)
  }

  handleSubmit = () => {
    console.log('Adding new school to database...');
  }

  handleNameChange = (e) => {
    console.log(e.target.value);
    
  }

  render(){
    return (
      <div className="newcampusform-container">
        <form onSubmit={this.handleSubmit} method="POST" action="http://localhost:3003/campuses">
          <h1>New Campus Form</h1>
          <h2>Campus Name</h2>
          <input type='text' name="name" onChange={this.handleChange}/>
          <h2>Campus Address</h2>
          <input type='text' name="address" onChange={this.handleChange}/>
          <input className="hide" value="https://www.usnews.com/dims4/USNEWS/0b40ca9/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fed%2F49512dcc50e5394df36dccecb41082%2FUSNews18_MainHall.jpg" type='text' name="imageurl" onChange={this.handleChange}/>
          <input type='submit' value="Add Campus"/> {/*ADD REDIRECT TO /CAMPUSES*/}
        </form>
      </div>
    );
  }
}

export default NewCampusForm;
