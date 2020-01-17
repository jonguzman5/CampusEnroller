import React from "react";
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";
import '../css/nav.css';
import App from "./App";
import Campuses from './Campuses/Campuses'
import NewCampusForm from './Campuses/NewCampusForm'
import Campus from "./Campus/Campus";
import Student from "./Student/Student";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Campuses">Campuses</Link>
            <Link to="/">Students</Link>
        </nav>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/Campus" component={Campus}/>
            <Route exact path="/Campuses" component={Campuses}/>
            <Route exact path="/Campuses/NewCampusForm" component={NewCampusForm}/>
            <Route exact path="/Student" component={Student}/>
            <Route exact component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Router;
