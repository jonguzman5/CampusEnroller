import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import Campus from "./Campus";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/Campus" component={Campus}/>
            <Route exact component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Router;
