import React from "react";
import {BrowserRouter as Router, Route, Redirect,Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Tv from "../Routes/Tv";
import Detail from "../Routes/Detail";
import Search from "../Routes/Search";

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/TV" exact component={Tv}/>
            <Route path="/TV/Detail" component={Detail}/>
            <Route path="/Search" component={Search}/>
            <Redirect from="*" to="/"/>
        </Switch>
    </Router>
)

