import React from "react";
import ReactJson from 'react-json-view'
import KeycloakAuthorization from "keycloak-js/dist/keycloak-authz";

class Token extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token : "",
            tokenParsed: {}
        };
    }

    async componentDidMount(){
        const tokenParsed = await this.props.keycloak.tokenParsed;
        const token = await this.props.keycloak.token;
        const authorization = new KeycloakAuthorization(this.props.keycloak);

        setTimeout(async () => {
            const rpt = await authorization.entitlement("browser-app");
            this.setState({
                rpt
            })
            }, 1000);

        this.setState({
            tokenParsed,
            token
        })
    }

    render() {
        return <div>
            <div>
                <h2>Access token parsed</h2>
                <ReactJson collapsed theme='monokai' src={this.state.tokenParsed} />
            </div>
            <div>
                <h2>Access token</h2>
                <code>
                    {this.state.token}
                </code>
            </div>
            {this.state.rpt?
                <div>
                    <h2>RPT</h2>
                    <code>{this.state.rpt}</code>
                </div> : null}
        </div>
    }
}

export default Token