import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/Campuses.css'
import CampusCard from './CampusCard'

class Campuses extends Component {
  constructor(props){
    super(props)
    this.state = {
        campusCardInfo: []
    }
  }

  addCampus = () => {
    console.log('clicked');
  }

  getCampusData = () => {
    return fetch(`http://localhost:3000/campuses`).then((response) => {
            if(response.status === 200) {
                return response.json()
            } else {
                throw new Error('Couldn\'t connect to server')
            }
        }).then((data) => {
            return data
        })
  }

  setCampusData = () => {
    this.getCampusData().then((data) => {
            
      let names = []
      let imageUrls = []
      let ids = []
      let campusInfo = []
      
      console.log(data)
      for(let i = 0; i < data.length; i++){
          names.push(data[i].name)
          imageUrls.push(data[i].imageurl)
          ids.push(data[i].id)
      }

      for(let i = 0; i < names.length; i++) {
        campusInfo.push({
          name: names[i],
          imageUrl: imageUrls[i],
          id: ids[i]
        })
      }

      this.setState({
        campusCardInfo: campusInfo
      })

  }).catch((err) => {
      console.log(err.message)
  })
  }

  getCampuses = () => {
    return this.state.campusCardInfo.map( (info) => {
      return (
          <CampusCard
              id={info.id}
              name={info.name}
              imageUrl={info.imageUrl}
          />
      );
    });
  }
  
  render(){

    this.setCampusData();

    return (
      <div className="campuses-container">
        <div className="campuses-header">
          <h3>All Campuses</h3>
          <NavLink to="/Campuses/NewCampusForm"><button>Add Campus</button></NavLink>
        </div>
        <div className="campuscard-container">
          {this.getCampuses()}
        </div>
      </div>
    );
  }
}

export default Campuses;
