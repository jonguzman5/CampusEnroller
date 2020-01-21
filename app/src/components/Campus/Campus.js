import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import EditCampusForm from '../Campuses/EditCampusForm';
import StudentPresent from './StudentPresent';
import StudentAbsent from './StudentAbsent';

import '../../css/Campus.css';

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
    if(!this.state.isEdit){
      if(true){ {/*QUERY: this.state.RELQUERYRES.length === 0 */}
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
      }
      else {
        return (
          <StudentPresent
            imageUrl={this.props.imageurl}
            address={this.props.address}
            name={this.props.name}
            description={this.props.description}
            handleEditClick={this.handleEditClick}
            handleDeleteClick={this.handleDeleteClick}
          />
        )
      }
    }
    else {
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
