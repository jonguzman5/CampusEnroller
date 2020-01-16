import React, { Component } from 'react'
import './Campuses.css'

class Campuses extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <div>
                <h3>All Campuses</h3>
                <button>Add Campus</button>           
            </div>
        );
    }
}

export default Campuses;