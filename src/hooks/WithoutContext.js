import { useState } from 'react';

/* 
WithoutContext

username is Rishi

C1 -> C2 -> C3 -> C4 -> C5
"Rishi" -> C2 -> C3 -> C4 -> "Rishi"
*/
const WithoutContext = () => {
    const [username, setUsername] = useState("Rishi");

    return (<>
        <h1>Without Context Example</h1>
        <div>In Component 1, username is {username}</div>
        <C2 username={username} />
    </>);
}

const C2 = (props) => {
    return (<>
        <C3 username={props.username} />
    </>);
}

const C3 = (props) => {
    return (<>
        <C4 username={props.username} />
    </>);
}

const C4 = (props) => {
    return (<>
        <C5 username={props.username} />
    </>);
}

const C5 = (props) => {
    return (<>
        <div>In Component 5, username is {props.username}</div>
    </>);
}

export default WithoutContext;