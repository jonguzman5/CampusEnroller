import React, { Component } from 'react'
import axios from 'axios'
import Campus from '../Campus/Campus'
import '../../css/Campuses.css'

class NewCampusForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      renderNewCampus: false,
      singleInfo: {},
      campusInfo: []
    };

    this.change = this.change.bind(this);
  }

  change = e => {
    const obj = { [e.target.name]: e.target.value };
    const campusInfo = Object.assign({}, this.state.campusInfo, obj);
    this.setState({
      campusInfo
    });
  };

  setCampusData = (data) => {

    let names = []
    let imageUrls = []
    let ids = []
    let addresses = []
    let descriptions = []
    let campusInfo = []

    for(let i = 0; i < data.length; i++){
        names.push(data[i].name)
        imageUrls.push(data[i].imageurl)
        ids.push(data[i].id)
        addresses.push(data[i].address)
        descriptions.push(data[i].description)
    }

    for(let i = 0; i < names.length; i++) {
      campusInfo.push({
        name: names[i],
        address: addresses[i],
        imageUrl: imageUrls[i],
        description: descriptions[i],
        id: ids[i]
      })
    }

    this.setState({
      campusCardInfo: campusInfo
    })
  }

  renderNewCampus = (id, data) => {
    this.setState({
      renderNewCampus: !(this.state.renderNewCampus)
    })

    axios.get(`http://localhost:3003/campuses/${id}`).then((response) => {
      this.setCampusData(response.data);
    })

  }

  handleSubmit = () => {
    let newCampus = {
      name: this.state.campusInfo.name,
      imageurl: 'https://www.usnews.com/dims4/USNEWS/0b40ca9/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fed%2F49512dcc50e5394df36dccecb41082%2FUSNews18_MainHall.jpg',
      address: this.state.campusInfo.address,
      description: "{ENTER Campus Description HERE}"
    }

    axios({
      method: 'post',
      url: `http://localhost:3003/campuses/`,
      data: newCampus
    }).then((response) => {
      this.renderNewCampus(response.statusText, response.data)
    })
  }

  handleClick = () => {
    this.setState({
      renderNewCampus: !(this.state.renderNewCampus)
    })
    this.handleSubmit();
  }

  render(){
    if(this.state.renderNewCampus){
      return (
        <Campus
          id={this.state.singleInfo.id}
          name={this.state.singleInfo.name}
          address={this.state.singleInfo.address}
          imageurl={this.state.singleInfo.imageUrl}
          description={this.state.singleInfo.description}
        />
      );
    } else {
      return (
      <div className="newcampusform-container">
        <form onSubmit={this.handleSubmit}>
          <h1>New Campus Form</h1>
          <h2>Campus Name</h2>
          <input type='text' name="name" onChange={e => this.change(e)}/>
          <h2>Campus Address</h2>
          <input type='text' name="address" onChange={e => this.change(e)}/>
          <input className="hide" value="https://www.usnews.com/dims4/USNEWS/0b40ca9/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fed%2F49512dcc50e5394df36dccecb41082%2FUSNews18_MainHall.jpg" type='text' name="imageurl" onChange={this.handleChange}/>
          <input onClick={this.handleClick} type='submit' value="Add Campus"/> {/*ADD REDIRECT TO /CAMPUSES*/}
        </form>
      </div>
    );
    }
    
  }
}

export default NewCampusForm;
