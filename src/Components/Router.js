import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "../Routes/Home";
import Tv from "../Routes/Tv";
import Detail from "../Routes/Detail";
import Search from "../Routes/Search";

export default () => (
    <Router>
        <>
        <Route path="/" exact component={Home}/>
        <Route path="/TV" exact component={Tv}/>
        <Route path="/Detail" exact component={Detail}/>
        <Route path="/Search" exact component={Search}/>
        </>
    </Router>
)

