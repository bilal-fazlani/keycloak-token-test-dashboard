import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Welcome from "./Welcome";
import Secured from "./Secured";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{"padding": "10px"}}>
                    <Link to='/'>public component</Link> | <Link to='/secured'>secured component</Link>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/secured" component={Secured}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
