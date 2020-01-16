import React, { Component } from 'react'
import '../../css/Campuses.css'
import CampusCard from '../CampusCard/CampusCard'

class Campuses extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <div>
                <h3>All Campuses</h3>
                <button className="AddCampusBtn">Add Campus</button>
                <CampusCard/>           
            </div>
        );
    }
}

export default Campuses;