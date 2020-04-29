import React from "react";
import {BrowserRouter as Router, Route, Redirect,Switch} from "react-router-dom";
import Header from "./Header"
import Home from "../Routes/Home/HomeContainer";
import Tv from "../Routes/Tv";
import Detail from "../Routes/Detail";
import Search from "../Routes/Search";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>

                <Route path="/tv" exact component={Tv}/>

                <Route path="/Search" component={Search}/>

                <Route path="/movie/:id" component={Detail} />
                <Route path="/tv/:id" component={Detail} />
                <Route path="/movie/:id/tab-company" component={Detail} />
                
                <Redirect from="*" to="/"/>
            </Switch>
        </>
    </Router>
)

