import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../../css/Students.css';
import StudentCard from './StudentCard';
//import Student from '../Student/Student';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentCardInfo: []
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
    //const prop = this.props.thing

    this.getStudentData();

    return (
      <div className="students-container">
        <div className="students-header">
          <h3>All Students</h3>
          <NavLink to="/Students/NewStudentForm"><button>Add Student</button></NavLink>
        </div>
        <div className="studentcard-container">
          {this.getStudents()}
          
        </div>
      </div>
    );
  }
}

export default Students;
