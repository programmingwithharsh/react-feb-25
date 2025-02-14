import React from "react";
class UserLocalStorage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ajay"
        }
        localStorage.setItem("username", "Swathi"); // key and value pair
        localStorage.setItem("x", "2");
        localStorage.setItem("active", true);
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        let value = localStorage.getItem("username"); // taking username from localstorage
        this.setState({
            name: value
        })
    }

    render() {
        console.log("render");
        return (<>
            <h1>
                Local Storage Example
            </h1>
            <h2>Username is {this.state.name}</h2>
        </>);
    }
}

export default UserLocalStorage;