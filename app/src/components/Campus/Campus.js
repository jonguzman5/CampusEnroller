import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Campus.css';
import CampusImage from './CampusImage';
import CampusAddress from './CampusAddress';
import CampusName from './CampusName';
import CampusDesc from './CampusDesc';
import StudentCard from '../Students/StudentCard';
import EditCampusForm from '../Campuses/EditCampusForm';
import axios from 'axios';
//import Student from '../Student/Student';

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
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
    if(this.state.isEdit){
      return (
        <EditCampusForm
        id={this.props.id}
        name={this.props.name}
        address={this.props.address}
        imageurl={this.props.imageurl}
        description={this.props.description}
        />
      ); 
    } else {
      return (
          <div className="container">
            <div className="box box1">
              <div className="item item1">
                <CampusImage
                  imageUrl={this.props.imageurl}
                />
                <CampusAddress
                  address={this.props.address}
                />
              </div>
              <div className="item item2">
                <CampusName
                  name={this.props.name}
                />
                <CampusDesc
                  description={this.props.description}/>
                <div className="buttons">
                  <button onClick={this.handleEditClick}>Edit</button>
                  <button onClick={this.handleDeleteClick}>Delete</button>
                </div>
              </div>
            </div>
            <div className="box box2">
              <h3>Students on campus</h3>
              <NavLink to="/Students/NewStudentForm"><button>Add Student</button></NavLink>
            </div>
            <div className="studentcard-container">
              <StudentCard/>
              <StudentCard/>
              <StudentCard/>
              <StudentCard/>
              <StudentCard/>
              <StudentCard/>
              <StudentCard/>
              <StudentCard/>
              <StudentCard/>
              <StudentCard/>
            </div>
        </div>
      );
    }
    
  }
}

export default Campus;
