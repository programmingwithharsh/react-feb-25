import React from "react";

class Welcome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div>Welcome Class Component</div>
            <div>Props Title is {this.props.title}</div>
        </div>);
    }
}

export default Welcome;