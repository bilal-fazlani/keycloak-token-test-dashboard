import React from "react";
import ReactJson from 'react-json-view'
import KeycloakAuthorization from "keycloak-js/dist/keycloak-authz";
import jwtDecode from 'jwt-decode'

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
            const rptParsed = jwtDecode(rpt);
            this.setState({
                rpt,
                rptParsed
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
                <h2>Access token</h2>
                <code>
                    {this.state.token}
                </code>
            </div>
            <div>
                <h2>Access token parsed</h2>
                <ReactJson collapsed theme='monokai' src={this.state.tokenParsed} />
            </div>
            {this.state.rpt?
                <div>
                    <div>
                        <h2>Requesting party token (RPT)</h2>
                        <code>{this.state.rpt}</code>
                    </div>
                    <div>
                        <h2>Requesting party token (RPT) parsed</h2>
                        <ReactJson collapsed theme='monokai' src={this.state.rptParsed} />
                    </div>
                </div> : null}
        </div>
    }
}

export default Token