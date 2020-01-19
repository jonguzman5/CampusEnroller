import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../../css/Students.css';
import StudentCard from './StudentCard';
import StudentsAbsent from './StudentsAbsent';
import StudentsPresent from './StudentsPresent'
import EditStudentForm from '../Student/EditStudentForm'


class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentCardInfo: [],
      edit: false
    }
  }

  getStudentData = () => {
    axios.get('http://localhost:3003/students').then((response) => {
      this.setStudentData(response.data);
    })
  }

  setStudentData = (data) => {

    let names = []
    let imageUrls = []
    let ids = []
    let studentInfo = []

    for(let i = 0; i < data.length; i++){

        names.push(data[i].firstname + " " + data[i].lastname)
        imageUrls.push(data[i].imageurl)
        ids.push(data[i].id)
    }

    for(let i = 0; i < names.length; i++) {
      studentInfo.push({
        name: names[i],
        imageUrl: imageUrls[i],
        id: ids[i]
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
          imageUrl={info.imageUrl}
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
        <EditStudentForm/>
      )
    }
  }
}

export default Students;
