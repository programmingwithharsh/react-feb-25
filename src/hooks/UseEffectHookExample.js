import { useState, useEffect } from 'react';
import axios from 'axios';

function UseEffectHookExample() {

    const [data, setData] = useState([]); // data is empty array, setData to update data
    const [users, setUsers] = useState([]);

    /*
        Functional Component
            data is []
            setData to update data

        Class Component 
            this.state 
            this.setState({})
    */

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users", { // by default Promise, async call
            method: "GET"
        })
            .then((response) => response.json()) // json format
            .then((items) => {
                console.log("fetch method", items)
                setData(items) // updating state
            })
    }, []) // effect will run once

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log("axios", response);
                setUsers(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []) // effect will run once

    return (<>
        <h1>User list using useState and useEffect Hook - fetch method</h1>
        <ul>
            {
                data.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))
            }
        </ul>

        <h1>User list using useState and useEffect Hook - using axios module</h1>
        <ul>
            {
                users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))
            }
        </ul>
    </>);
}

export default UseEffectHookExample;