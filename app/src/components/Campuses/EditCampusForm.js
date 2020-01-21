import React, { Component } from 'react'
import axios from 'axios'
import StudentsAbsent from './StudentsAbsent'
import StudentsPresent from './StudentsPresent'
import '../../css/Campuses.css'

class EditCampusForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      campusInfo: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change = this.change.bind(this);
  }

  change = e => {
    const obj = { [e.target.name]: e.target.value };
    const campusInfo = Object.assign({}, this.state.campusInfo, obj);
    this.setState({
      campusInfo
    });
  };

  updateCampusInfo = (data, alertMessage) => {
    axios({
      method: 'put',
      url: `http://localhost:3003/campuses/update/${this.props.id}`,
      data: data
    }).then(res => {
        if(res.status === 200 ) {
          alert(alertMessage)
          console.log(res);
          console.log(res.data);
        } else {
          throw new Error();
        }

      }).catch((err) => {
        console.log('CATCH! =' + err.response.data.errors)
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let updateCampus = null

    if (!this.state.campusInfo.name || !this.state.campusInfo.address) {
      updateCampus = {
        name: this.props.name,
        imageurl: 'https://www.usnews.com/dims4/USNEWS/0b40ca9/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fed%2F49512dcc50e5394df36dccecb41082%2FUSNews18_MainHall.jpg',
        address: this.props.address,
        description: this.state.campusInfo.description
      }

      this.updateCampusInfo(updateCampus, 'ERROR: You can\'t leave "name" or "address" blank!');

    } else if(!this.state.campusInfo.imageurl){
      updateCampus = {
        name: this.state.campusInfo.name,
        imageurl: 'https://www.usnews.com/dims4/USNEWS/0b40ca9/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fed%2F49512dcc50e5394df36dccecb41082%2FUSNews18_MainHall.jpg',
        address: this.state.campusInfo.address,
        description: this.state.campusInfo.description
      }

      this.updateCampusInfo(updateCampus, "This campus has been successfully updated!");
    } else {
      updateCampus = {
        name: this.state.campusInfo.name,
        imageurl: this.state.campusInfo.imageurl,
        address: this.state.campusInfo.address,
        description: this.state.campusInfo.description
      }

      this.updateCampusInfo(updateCampus, "This campus has been successfully updated!");
    }
    // axios.put(`http://localhost:3003/campuses/update/${this.props.id}`, this.state.campusInfo)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }

  render(){
    if(false){
      return (
        <StudentsAbsent
          id={this.props.id}
          name={this.props.name}
          address={this.props.address}
          imageurl={this.props.imageurl}
          description={this.props.description}
          onChange={e => this.change(e)}
          onSubmit={this.handleSubmit}
        />
      );
    }
    else {
      return (
        <StudentsPresent
          id={this.props.id}
          name={this.props.name}
          address={this.props.address}
          imageurl={this.props.imageurl}
          description={this.props.description}
          onChange={e => this.change(e)}
          onSubmit={this.handleSubmit}
        />
      )
    }
  }
}

export default EditCampusForm;
