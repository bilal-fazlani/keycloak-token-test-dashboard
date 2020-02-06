import React from "react";
import ReactJson from 'react-json-view'

class Token extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            init:true
        };
    }

    async componentDidMount(){
        setTimeout(async () => {
            const tokenParsed = await this.props.keycloak.tokenParsed;
            const token = await this.props.keycloak.token;
            this.setState({
                tokenParsed,
                token,
                init:false
            })
            }, 1000);
    }

    render() {
        return <div>{this.state.init ? <div>Loading Access token...</div> :
            <div>
                <div>
                    <h2>Access token</h2>
                    <code>
                        {this.state.token}
                    </code>
                </div>
                <div>
                    <h2> Access token parsed</h2>
                    <ReactJson theme='google' src={this.state.tokenParsed} />
                </div>
            </div>
            }
        </div>
    }
}

export default Token