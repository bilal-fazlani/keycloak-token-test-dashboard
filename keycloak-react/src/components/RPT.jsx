import React from "react";
import ReactJson from 'react-json-view'
import KeycloakAuthorization from "keycloak-js/dist/keycloak-authz";
import jwtDecode from 'jwt-decode'

class RPT extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            init:true
        };
    }

    async componentDidMount(){

        setTimeout(async ()=>{
            try{
                const kc = this.props.keycloak;
                const realm = kc.realm;
                const rptResponse =  await fetch(kc.authServerUrl + `/realms/${realm}/protocol/openid-connect/token`, {
                    headers: {
                        "grant_type": "urn:ietf:params:oauth:grant-type:uma-ticket",
                        "audience": kc.clientId,
                        "Authorization" : `Bearer ${kc.token}`
                    }
                });
                const js = await rptResponse.json();
                this.setState({
                    init:false
                })
            }
            catch (e) {
                console.error(e);
                this.setState({
                    init:false,
                    error:e
                })
            }
            }, 2000
        )
    }

    render() {
        if(this.state.error) return <div>
            <h2>Error while loading RPT</h2>
            {this.state.error.toString()}
        </div>;
        else return <div>
            {this.state.init ? <div>Loading RPT...</div> :
                <div>
                    <div>
                        <h2>Requesting party token (RPT)</h2>
                        <code>{this.state.rpt}</code>
                    </div>
                    <div>
                        <h2>Requesting party token (RPT) parsed</h2>
                        <ReactJson collapsed theme='monokai' src={this.state.rptParsed} />
                    </div>
                </div>}
        </div>
    }
}

export default RPT