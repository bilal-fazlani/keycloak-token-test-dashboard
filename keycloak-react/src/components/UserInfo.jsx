import React from "react";
import ReactJson from 'react-json-view'


class UserInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            init: true
        };
    }

    async componentDidMount() {
        setTimeout(async () => {
            const idToken = await this.props.keycloak.idToken;
            const idTokenParsed = await this.props.keycloak.idTokenParsed;
            this.setState({
                idTokenParsed,
                idToken,
                init: false
            })
        }, 1000)
    }

    render() {
        return <div>
            {this.state.init ? <div>Loading Id token...</div> : <div>
                <div>
                    <h2>Id token</h2>
                    <code>{this.state.idToken}</code>
                </div>
                <div>
                    <h2>Id token Parsed</h2>
                    <ReactJson collapsed theme='monokai' src={this.state.init ? {} : this.state.idTokenParsed}/>
                </div>
            </div>
            }
        </div>
    }
}

export default UserInfo