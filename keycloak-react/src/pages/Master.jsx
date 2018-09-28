import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Welcome from "./Welcome";
import Secured from "./Secured";
import Nav from "../components/Nav";

class Master extends React.Component {
    render() {
        return <BrowserRouter>
            <div style={{"padding": "10px"}}>
                <Nav />
                <Route exact path="/" component={Welcome}/>
                <Route path="/secured" component={Secured}/>
            </div>
        </BrowserRouter>
    }
}

export default Master