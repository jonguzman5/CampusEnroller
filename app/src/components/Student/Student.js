import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import '../../css/Student.css';
import axios from 'axios';
import EditStudentForm from './EditStudentForm';
import CampusPresent from './CampusPresent';
import CampusAbsent from './CampusAbsent';

class Student extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEdit: false
    }
  }

  handleDeleteClick = () => {
    axios.delete(`http://localhost:3003/students/delete/${this.props.id}`)
      .then(res => {
        console.log(res.data);
        window.location.replace("http://localhost:3005/Students");
      })
  }

  handleEditClick = () => {
    this.setState({
      isEdit: !(this.state.isEdit)
    })
  }

  render(){
    // this.getStudentData();
    if(!this.state.isEdit) {
      if(true){ {/*QUERY: this.state.RELQUERYRES.length === 0 */}
        return (
          <CampusAbsent
            imageurl={this.props.imageurl}
            name={this.props.name}
            gpa={this.props.gpa}
            handleEditClick={this.handleEditClick}
            handleDeleteClick={this.handleDeleteClick}
          />
        )
      }
      else {
        return (
          <CampusPresent
            imageurl={this.props.imageurl}
            name={this.props.name}
            gpa={this.props.gpa}
            handleEditClick={this.handleEditClick}
            handleDeleteClick={this.handleDeleteClick}
          />
        )
      }
    }
    else {
      const fullName = this.props.name.split(' ');
      return (
        <EditStudentForm
          id={this.props.id}
          firstName={fullName[0]}
          lastName={fullName[1]}
          email={this.props.email}
          imageurl={this.props.imageurl}
          gpa={this.props.gpa}
        />
      )
    }
  }
}

export default Student;

