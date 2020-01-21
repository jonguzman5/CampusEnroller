import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import '../../css/Campuses.css'
import CampusCard from './CampusCard'
import EditCampusForm from './EditCampusForm'
import CampusesAbsent from './CampusesAbsent'
import CampusesPresent from './CampusesPresent'
import Campus from '../Campus/Campus'

class Campuses extends Component {
  constructor(props){
    super(props)
    this.state = {
        campusCardInfo: [],
        edit: false,
        editInfo: {},
        isSingle: false,
        singleInfo: {}
    }
  }

  changeEditInfo = (id, name, address, imageUrl, description) => {
    this.setState({
      editInfo: {
        id: id,
        name: name,
        address: address,
        imageUrl: imageUrl,
        description: description
      }
    })
  }

  changeSingleInfo = (id, name, address, imageUrl, description) => {
    this.setState({
      singleInfo: {
        id: id,
        name: name,
        address: address,
        imageUrl: imageUrl,
        description: description
      }
    })
  }

  changeEdit = () => {
    this.setState({
      edit: (!this.state.edit)
    })
  }

  changeIsSingle = () => {
    this.setState({
      isSingle: (!this.state.isSingle)
    })
  }

  addCampus = () => {
    console.log('clicked');
  }

  getCampusData = () => {

    axios.get('http://localhost:3003/campuses').then((response) => {
      this.setCampusData(response.data);
    })
    
  }

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

  getCampuses = () => {

    if(this.state.isSingle) {
      return (
        <Campus
          id={this.state.singleInfo.id}
          name={this.state.singleInfo.name}
          address={this.state.singleInfo.address}
          imageurl={this.state.singleInfo.imageUrl}
          description={this.state.singleInfo.description}
        />
      );

    }
    let key = 0;
    return this.state.campusCardInfo.map( (info) => {
      ++key;
      return (
          <CampusCard
              key={key}
              id={info.id}
              name={info.name}
              imageUrl={info.imageUrl}
              address={info.address}
              description={info.description}
              changeEditInfo={this.changeEditInfo}
              changeEdit={this.changeEdit}
              changeSingleInfo={this.changeSingleInfo}
              changeIsSingle={this.changeIsSingle}
          />
      );
    });
  }

  render(){
    this.getCampusData();
    if(!this.state.edit){
      if(this.state.campusCardInfo.length === 0){
        return (
          <CampusesAbsent/>
        )
      }
      else {
        return (
          <CampusesPresent getCampuses={this.getCampuses}/>
        );
      }
    }
    else {
      return (
        <EditCampusForm
          id={this.state.editInfo.id}
          name={this.state.editInfo.name}
          address={this.state.editInfo.address}
          imageurl={this.state.editInfo.imageUrl}
          description={this.state.editInfo.description}
        />
      );
    }
  }
}

export default Campuses;
