import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import EditCampusForm from '../Campuses/EditCampusForm';
import StudentPresent from './StudentPresent';
import StudentAbsent from './StudentAbsent';
import Student from '../Student/Student'

import '../../css/Campus.css';

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      isStudent: null,
      studentPageInfo: {}
    }
  }

  changeIsSingle = () => {
    this.setState({
      isStudent: true
    })
  }

  changeSingleInfo = (id, name, email, imageurl, gpa) => {
    this.setState({
      studentPageInfo: {
        id: id,
        name: name,
        email: email,
        imageurl: imageurl,
        gpa: gpa
      }
    })
  }

  handleEditClick = () => {
    this.setState({
      isEdit: !(this.state.isEdit)
    })
  }

  handleDeleteClick = () => {
    axios.delete(`http://localhost:3003/campuses/delete/${this.props.id}`)
      .then(res => {
        console.log(res.data);
        window.location.replace("http://localhost:3005/");
      })
  }

  render(){
    if(!this.state.isEdit){
      if( !this.props.numStudents || this.props.numStudents === 0 ){ {/*QUERY: this.state.RELQUERYRES.length === 0 */}
        return (
          <StudentAbsent
            imageUrl={this.props.imageurl}
            address={this.props.address}
            name={this.props.name}
            description={this.props.description}
            handleEditClick={this.handleEditClick}
            handleDeleteClick={this.handleDeleteClick}
          />
        )
      } else if(this.state.isStudent) {
        return(
          <Student
            id={this.state.studentPageInfo.id}
            name={this.state.studentPageInfo.name}
            email={this.state.studentPageInfo.email}
            imageurl={this.state.studentPageInfo.imageurl}
            gpa={this.state.studentPageInfo.gpa}
            singleCardInfo={this.state.studentPageInfo}
          />
        );
      } else {
        return (
          <StudentPresent
            imageUrl={this.props.imageurl}
            address={this.props.address}
            name={this.props.name}
            description={this.props.description}
            studentData={this.props.studentData}
            handleEditClick={this.handleEditClick}
            handleDeleteClick={this.handleDeleteClick}
            changeIsSingle={this.changeIsSingle}
            changeSingleInfo={this.changeSingleInfo}
          />
        )
      }
    } else {
        return (
          <EditCampusForm
            id={this.props.id}
            name={this.props.name}
            address={this.props.address}
            imageurl={this.props.imageurl}
            description={this.props.description}
          />
        )
    }

  }
}

export default Campus;
