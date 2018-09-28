import React from "react";
import KeyCloak from 'keycloak-js';

class Secured extends React.Component {

    async componentDidMount(){
        const keycloak = KeyCloak('/keycloak.json')
        const authenticated = await keycloak.init({onLoad: 'login-required'})
        this.setState({keycloak, authenticated})

    }

    constructor(props) {
        super(props);
        this.state = {keycloak: null, authenticated: false};
    }

    render() {
        if(this.state.keycloak){
            if(this.state.authenticated)
            return <div>
                <h3>SECURED</h3>
                <div>
                    This is a keycloak secured page
                </div>
            </div>;
            else
                return <div>
                    <h3>Unable to authenticate!</h3>
                </div>
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