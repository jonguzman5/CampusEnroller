import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import '../../css/Student.css';
import StudentImage from './StudentImage';
import StudentName from './StudentName';
import StudentDesc from './StudentDesc';
import axios from 'axios';

class Student extends Component {
  constructor(props){
    super(props);
  }

  handleDeleteClick = () => {
    axios.delete(`http://localhost:3003/students/delete/${this.props.id}`)
      .then(res => {
        console.log(res.data);
        window.location.replace("http://localhost:3005/Students");
      })
  }

  handleEditClick = () => {
    console.log('Editing...')
  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="box box1">
            <div className="item item1">
              <StudentImage imageurl={this.props.imageurl}/>
            </div>
            <div className="item item2">
              <StudentName name={this.props.name}/>
              <StudentDesc gpa={this.props.gpa}/>
              <div className="buttons">
                <button onClick={this.handleEditClick}>Edit</button>
                <button onClick={this.handleDeleteClick}>Delete</button>
              </div>
            </div>
          </div>
          <div className="box box3">
            <div className="item item3">
              <select>
                <option value="">Select campus...</option>
                <option value="">Campus 1</option>
                <option value="">Campus 2</option>
              </select>
              <NavLink to="/Campus"><button>Add to Campus</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;

