import {Link} from "react-router-dom";
import React from "react";

class Nav extends React.Component{
    render(){
        return <div>
            <Link to='/'>Home</Link> | <Link to='/secured'>Secret Information</Link>
        </div>
    }
}

export default Nav


