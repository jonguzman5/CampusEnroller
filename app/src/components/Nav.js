import React, { Component } from 'react';
import '../css/Nav.css'

class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav>
                <a>Home</a>
                <a>Campuses</a>
                <a>Students</a>
            </nav>

        );
    }
}

export default Nav;