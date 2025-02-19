import { useState, useEffect } from 'react';

function UseEffectHookExample() {

    const [data, setData] = useState([]); // data is empty array, setData to update data

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
                setData(items) // updating state
            })
    }, []) // effect will run once

    return (<>
        <h1>User list using useState and useEffect Hook</h1>
       
    </>);
}

export default UseEffectHookExample;