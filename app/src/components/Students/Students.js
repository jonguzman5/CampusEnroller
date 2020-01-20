import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../../css/Students.css';
import StudentCard from './StudentCard';
import StudentsAbsent from './StudentsAbsent';
import StudentsPresent from './StudentsPresent';
import EditStudentForm from '../Student/EditStudentForm';
import Student from '../Student/Student';


class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentCardInfo: [],
      isSingle: false,
      singleInfo: {}
    }
  }

  changeIsSingle = () => {
    this.setState({
      isSingle: !(this.state.isSingle)
    })
  }

  changeSingleInfo = (id, name, email, imageurl, gpa) => {
    this.setState({
      singleInfo: {
        id: id,
        name: name,
        email: email,
        imageurl: imageurl,
        gpa: gpa 
      }
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

    if(this.state.isSingle) {
      return (
        <Student
          id={this.state.singleInfo.id}
          name={this.state.singleInfo.name}
          email={this.state.singleInfo.email}
          imageurl={this.state.singleInfo.imageurl}
          gpa={this.state.singleInfo.gpa}
        />
      );
    }

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
          changeSingleInfo={this.changeSingleInfo}
          changeIsSingle={this.changeIsSingle}
        />
      );
    });
  }

  render(){
    this.getStudentData();
    
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
}

export default Students;
