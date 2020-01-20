import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../../css/Students.css';
import StudentCard from './StudentCard';
import StudentsAbsent from './StudentsAbsent';
import StudentsPresent from './StudentsPresent';
import EditStudentForm from '../Student/EditStudentForm';


class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentCardInfo: [],
      edit: false,
      editInfo: {}
    }
  }

  changeEditInfo = (id, firstname, lastname, email, imageurl, gpa) => {
    this.setState({
      editInfo : {
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        imageurl: imageurl,
        gpa: gpa
      }
    })
  }

  changeEdit = () => {
    this.setState({
      edit: (!this.state.edit)
    })
  }

  getStudentData = () => {
    axios.get('http://localhost:3003/students').then((response) => {
      this.setStudentData(response.data);
    })
  }

  setStudentData = (data) => {

    let ids = []
    let names = []
    let emails = []
    let imageurls = []
    let gpas = []
    let studentInfo = []

    for(let i = 0; i < data.length; i++){
        ids.push(data[i].id)
        names.push(data[i].firstname + " " + data[i].lastname)
        emails.push(data[i].email)
        imageurls.push(data[i].imageurl)
        gpas.push(data[i].gpa)
    }

    for(let i = 0; i < names.length; i++) {
      studentInfo.push({
        id: ids[i],
        name: names[i],
        email: emails[i],
        imageurl: imageurls[i],
        gpa: gpas[i]
      })
    }

    this.setState({
      studentCardInfo: studentInfo
    })
}

  getStudents = () => {
    let key = 0;
    return this.state.studentCardInfo.map( (info) => {
      ++key;
      return (
        <StudentCard
          key={key}
          id={info.id}
          name={info.name}
          email={info.email}
          imageurl={info.imageurl}
          gpa={info.gpa}
          changeEditInfo={this.changeEditInfo}
          changeEdit={this.changeEdit}
        />
      );
    });
  }

  render(){
    this.getStudentData();
    if(!this.state.edit){
      if(this.state.studentCardInfo.length === 0){
        return (
          <StudentsAbsent/>
        )
      }
      else {
        return (
          <StudentsPresent getStudents={this.getStudents}/>
        )
      }
    }
    else {
      return (
        <EditStudentForm
          id={this.state.editInfo.id}
          name={this.state.editInfo.name}
          email={this.state.editInfo.email}
          imageurl={this.state.editInfo.imageurl}
          gpa={this.state.editInfo.gpa}
        />
      )
    }
  }
}

export default Students;
