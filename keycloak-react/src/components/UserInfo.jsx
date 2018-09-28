import React from "react";
import ReactJson from 'react-json-view'


class UserInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        };
    }

    async componentDidMount(){
        const userInfo = await this.props.keycloak.loadUserInfo();
        this.setState({
            userInfo: userInfo
        })
    }

    render() {
        return <div>
            {/*<div>Name: {this.state.name}</div>*/}
            {/*<div>Email: {this.state.email}</div>*/}
            {/*<div>Id: {this.state.sub}</div>*/}

            <ReactJson theme='monokai' src={this.state.userInfo} />
        </div>
    }
}

export default UserInfo