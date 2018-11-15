import React from "react";
import ReactJson from 'react-json-view'

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
        </div>
    }
}

export default Token