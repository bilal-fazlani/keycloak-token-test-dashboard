import React from "react";
import KeyCloak from 'keycloak-js';
import Logout from "../components/Logout";
import Token from "../components/Token";

class Secured extends React.Component {

    constructor(props) {
        super(props);
        this.state = {keycloak: null, authenticated: false};
    }

    async componentDidMount(){
        const keycloak = KeyCloak('/keycloak.json');
        const authenticated = await keycloak.init({onLoad: 'login-required'});
        this.setState({keycloak, authenticated})
    }

    render() {
        if(this.state.keycloak){
            if(this.state.authenticated){
            return <div>
                <h3>
                    <span>Secret Information</span>
                    <Logout keycloak={this.state.keycloak} />
                </h3>
                <div>This is a keycloak secured page</div>
                <div>
                    <Token keycloak={this.state.keycloak} />
                    <br/>
                </div>
            </div>;
            }
            else
            {
                return <div>
                    <h3>Unable to authenticate!</h3>
                </div>
            }
        }
        else{
            return <div>
                <h3>Initialising keycloak....</h3>
                <div>Logging in</div>
            </div>
        }
    }
}

export default Secured