import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../../css/Campuses.css'

class CampusCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      numStudents: 0
    }
  }

  numStudents = () => {
    return "num";
  }

  deleteCampus = () => {
    axios.delete(`http://localhost:3003/campuses/delete/${this.props.id}`)
      .then(res => {
        console.log(res.data);
      })
  }

  handleClick = () => {
    console.log(this.props.id)
    this.props.changeEditInfo(this.props.id, this.props.name, this.props.address, this.props.imageUrl, this.props.description)
    this.props.changeEdit()
  }

  handleCampusClick = () => {
    console.log(this.props.id)
    this.props.changeSingleInfo(this.props.id, this.props.name, this.props.address, this.props.imageUrl, this.props.description)
    this.props.changeIsSingle();
  }

  setNumStudents = (data) => {
    this.setState({
      numStudents: data.length
    });
  }

  getNumStudents = () => {

    axios.get(`http://localhost:3003/students/in/campus/${this.props.id}`).then((response) => {
      this.setNumStudents(response.data);
    })
    
  }
  
  render = () => {
    this.getNumStudents();
    return (
      <div className="campuscard">
        <img src={this.props.imageUrl}></img>
        <a onClick={this.handleCampusClick}><h4>{this.props.name}</h4></a>
        <p>{this.state.numStudents + " Students"}</p>
        <div className="buttons">
          <button onClick={this.handleClick}>Edit</button>
          <button onClick={this.deleteCampus}>Delete</button>
        </div>
      </div>
    );
  }
}


export default CampusCard;
