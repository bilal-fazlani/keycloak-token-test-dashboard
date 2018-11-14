import React from "react";
import ReactJson from 'react-json-view'


class Token extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: {}
        };
    }

    async componentDidMount(){
        const token = await this.props.keycloak.tokenParsed;

        this.setState({
            token
        })
    }

    render() {
        return <div>
            <ReactJson theme='monokai' src={this.state.token} />
        </div>
    }
}

export default Token